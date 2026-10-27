const assert = require('node:assert/strict');
const {mkdirSync} = require('node:fs');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const BASE_URL = process.env.TEST_BASE_URL || 'http://127.0.0.1:5501';
mkdirSync('.qa', {recursive:true});

(async()=>{
  const browser=await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];const failedRequests=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400)failedRequests.push(`${response.status()} ${response.url()}`);});
  await page.goto(BASE_URL,{waitUntil:'networkidle'});
  assert.equal(await page.title(),'eBay — Find your next favorite');
  async function noOverflow(label){assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),label+' overflows');}
  async function imagesLoaded(){
    // Scroll every rail so lazy-loaded photos are also requested.
    await page.evaluate(async()=>{for(const img of document.images){img.loading='eager';}await Promise.all(Array.from(document.images,img=>img.decode().catch(()=>{})));});
    const broken=await page.evaluate(()=>Array.from(document.images).filter(img=>!img.complete||!img.naturalWidth).map(img=>img.src));
    assert.deepEqual(broken,[],'Broken images');
  }
  await imagesLoaded();await noOverflow('Desktop home');
  await page.screenshot({path:'.qa/desktop.png',fullPage:true});
  await page.locator('[data-action="next-slide"]').click();assert.match(await page.locator('#hero-title').innerText(),/Good style/);
  await page.locator('[data-slide="2"]').click();assert.match(await page.locator('#hero-title').innerText(),/More wow/);
  await page.locator('[data-action="previous-slide"]').click();assert.match(await page.locator('#hero-title').innerText(),/Good style/);
  await page.locator('[data-slide="0"]').click();
  await page.locator('#category-toggle').click();assert.equal(await page.locator('#category-toggle').getAttribute('aria-expanded'),'true');
  await page.keyboard.press('Escape');assert.equal(await page.locator('#category-toggle').getAttribute('aria-expanded'),'false');assert(await page.locator('#category-toggle').evaluate(el=>el===document.activeElement));
  const opener=page.locator('#deals-rail [data-product="headphones"]').first();await opener.click();
  assert(await page.locator('#shop-dialog').isVisible());assert.match(await page.locator('.detail-info').innerText(),/Free standard shipping/);
  await page.locator('.detail-watch').click();assert.equal(await page.locator('.detail-watch').getAttribute('aria-pressed'),'true');
  await page.locator('[data-add="headphones"]').click();await page.keyboard.press('Escape');assert(await opener.evaluate(el=>el===document.activeElement));
  await page.locator('.utility-right [data-action="cart"]').click();assert.equal(await page.locator('#cart-subtotal').innerText(),'$89.99');
  await page.locator('[data-delta="1"]').click();assert.equal(await page.locator('#cart-subtotal').innerText(),'$179.98');assert(await page.locator('[data-delta="1"]').evaluate(el=>el===document.activeElement));
  await page.locator('[data-delta="-1"]').click();assert.equal(await page.locator('#cart-subtotal').innerText(),'$89.99');assert(await page.locator('[data-delta="-1"]').isDisabled());
  await page.locator('[data-info="Checkout"]').click();assert.match(await page.locator('#dialog-content').innerText(),/No payment will be collected/);await page.keyboard.press('Escape');
  await page.reload({waitUntil:'networkidle'});
  await page.locator('.utility-right [data-action="watchlist"]').click();assert.equal(await page.locator('.basket-item').count(),1);await page.locator('.basket-item [data-watch]').click();assert.match(await page.locator('#dialog-content').innerText(),/Keep your favorites close/);await page.keyboard.press('Escape');
  await page.locator('.utility-right [data-action="cart"]').click();assert.equal(await page.locator('#cart-subtotal').innerText(),'$89.99');await page.locator('[data-remove-cart]').click();assert.match(await page.locator('#dialog-content').innerText(),/Your next find is out there/);await page.keyboard.press('Escape');
  await page.locator('#search-input').fill('headphones');await page.locator('#search-form').evaluate(el=>el.requestSubmit());assert.equal(await page.locator('#results-grid .product-card').count(),2);
  await page.locator('[data-filter="fashion"]').click();assert(await page.locator('#empty-results').isVisible());assert.match(await page.locator('#result-count').innerText(),/0 results in Fashion/);
  await page.locator('#results-section .section-heading [data-action="reset"]').click();assert.equal(await page.locator('#results-grid .product-card').count(),24);
  await page.locator('#search-input').fill('portable sound');await page.locator('#search-form').evaluate(el=>el.requestSubmit());assert.equal(await page.locator('#results-grid .product-card').count(),1);
  await page.locator('#search-input').fill('<img src=x onerror=alert(1)>');await page.locator('#search-form').evaluate(el=>el.requestSubmit());assert(await page.locator('#empty-results').isVisible());assert.equal(await page.locator('#results-title img').count(),0);
  for(const width of [1440,768,390]){
    await page.setViewportSize({width,height:1000});await noOverflow(width+' results');
    await page.locator('#results-section .section-heading [data-action="reset"]').click();await imagesLoaded();
    await page.screenshot({path:`.qa/results-${width}.png`,fullPage:true});
    await page.locator('.nav-link[data-action="home"]').click();await noOverflow(width+' home');await imagesLoaded();
    await page.locator('#toast').evaluate(el=>el.classList.remove('visible'));
    await page.screenshot({path:`.qa/home-${width}.png`,fullPage:true});
    if(width===390){await page.locator('.mobile-only').click();await page.locator('#dialog-content [data-category="home"]').click();assert.equal(await page.locator('#results-grid .product-card').count(),4);await noOverflow('Mobile filtered');}
    else {await page.locator('#hero-cta').click();}
  }
  // Storage recovery and sanitization.
  for(const data of ['{broken','null',JSON.stringify({watchlist:['headphones','headphones','unknown',null],cart:{headphones:2,unknown:1,sneakers:-1,camera:100,watch:'2',lamp:1.5}})]){
    await page.evaluate(data=>localStorage.setItem('ebay-shopping-demo-v1',data),data);await page.reload({waitUntil:'networkidle'});
    await page.locator('.mobile-actions [data-action="cart"]').click();
    if(data.includes('unknown')){assert.equal(await page.locator('.basket-item').count(),1);assert.equal(await page.locator('#cart-subtotal').innerText(),'$179.98');}else assert.equal(await page.locator('.basket-item').count(),0);
    await page.keyboard.press('Escape');
  }
  // Unavailable localStorage must not prevent shopping.
  const blocked=await browser.newContext({viewport:{width:1440,height:900}});await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}});});
  const blockedPage=await blocked.newPage();blockedPage.on('pageerror',e=>errors.push(e.message));await blockedPage.goto(BASE_URL);await blockedPage.locator('#deals-rail [data-watch="headphones"]').click();assert.equal(await blockedPage.locator('#deals-rail [data-watch="headphones"]').getAttribute('aria-pressed'),'true');await blocked.close();
  await page.evaluate(()=>localStorage.removeItem('ebay-shopping-demo-v1'));await page.reload();
  assert.deepEqual(errors,[],'Console/page errors');assert.deepEqual(failedRequests,[],'HTTP failures');
  console.log('PASS: 24 products; search + category intersections; empty/reset; escaped search; carousel; categories; product modal; keyboard focus; watchlist/cart persistence and removal; quantities/subtotal; demo checkout; storage sanitization and unavailable storage; images; 390/768/1440 layouts; no page errors or HTTP failures.');
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1);});
