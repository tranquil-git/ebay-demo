'use strict';

const PRODUCTS = [
  {id:'headphones',name:'Wireless over-ear headphones, noise cancelling',category:'electronics',image:'headphones',price:89.99,original:149.99,condition:'Certified refurbished',description:'Get lost in your music with rich sound, a comfortable over-ear fit, and active noise cancellation.',badge:'Refurbished'},
  {id:'sneakers',name:'Everyday running sneakers — bold red',category:'fashion',image:'sneakers',price:64.99,original:110,condition:'New with box',description:'Lightweight red running shoes with a cushioned sole. A fresh favorite for everyday adventures.',badge:'Great price'},
  {id:'camera',name:'Digital mirrorless camera with zoom lens',category:'electronics',image:'camera',price:349.99,original:499.99,condition:'Excellent — pre-owned',description:'Capture everyday moments in beautiful detail. Includes a versatile zoom lens and camera strap.',badge:'Popular find'},
  {id:'watch',name:'Classic stainless steel everyday watch',category:'fashion',image:'watch',price:79.99,original:129,condition:'New with tags',description:'A timeless analog watch with a clean dial and comfortable strap. Dress it up or keep it casual.'},
  {id:'console',name:'Home gaming console with wireless controller',category:'electronics',image:'console',price:299.99,original:399.99,condition:'Certified refurbished',description:'Your next game night starts here. A refurbished home console with one wireless controller.',badge:'Refurbished'},
  {id:'handbag',name:'Everyday leather-look shoulder bag',category:'fashion',image:'handbag',price:48,original:85,condition:'New without tags',description:'An effortlessly versatile shoulder bag with room for your daily essentials.'},
  {id:'laptop',name:'Slim 13-inch laptop, 8GB RAM, 256GB SSD',category:'electronics',image:'laptop',price:429.99,original:699.99,condition:'Certified refurbished',description:'A portable laptop for work, creativity, and everything in between. Charger included.',badge:'Refurbished'},
  {id:'speaker',name:'Portable wireless speaker with deep bass',category:'electronics',image:'speaker',price:59.99,original:99.99,condition:'New',description:'Big sound in a small package. Bring your playlists along with a portable Bluetooth speaker.'},
  {id:'studio-headphones',name:'Studio headphones for music lovers',category:'electronics',image:'headphones',price:119,original:179,condition:'Like new',description:'Hear the little details in your favorite tracks with these comfortable studio headphones.'},
  {id:'sunglasses',name:'Retro-inspired everyday sunglasses',category:'fashion',image:'sunglasses',price:29.99,original:49,condition:'New with tags',description:'A classic pair of sunglasses with a vintage-inspired shape and everyday appeal.'},
  {id:'jacket',name:'Classic black biker jacket',category:'fashion',image:'jacket',price:89,original:159,condition:'Very good — pre-owned',description:'Add a little edge to your wardrobe. A classic black jacket with zip pockets and a timeless fit.'},
  {id:'trainers',name:'Red performance trainers — everyday comfort',category:'fashion',image:'sneakers',price:54.99,original:89.99,condition:'Excellent — pre-owned',description:'Pre-loved red athletic shoes, ready for a new adventure. Cushioned, lightweight, and full of personality.'},
  {id:'vinyl',name:'Vintage vinyl record — collector’s edition',category:'collectibles',image:'vinyl',price:24.99,original:39.99,condition:'Very good — vintage',description:'Something for your listening corner. A vintage record with its original sleeve and a whole lot of character.',badge:'One of a kind'},
  {id:'film-camera',name:'Vintage camera for your collection',category:'collectibles',image:'camera',price:129,original:175,condition:'Good — vintage',description:'A conversation-starting camera for photography enthusiasts and vintage collectors. Display piece.'},
  {id:'books',name:'Vintage hardcover book collection — set of 3',category:'collectibles',image:'books',price:34.99,original:54,condition:'Good — pre-owned',description:'Three vintage hardcover books, perfect for a cozy reading nook or a thoughtfully styled shelf.'},
  {id:'vintage-watch',name:'Vintage analog watch — timeless design',category:'collectibles',image:'watch',price:145,original:195,condition:'Very good — vintage',description:'A watch with a story to tell. A handsome vintage design for your personal collection.'},
  {id:'chair',name:'Modern accent chair for your favorite corner',category:'home',image:'chair',price:159.99,original:249,condition:'New',description:'Make yourself at home. A modern accent chair that brings comfort and personality to your space.'},
  {id:'lamp',name:'Minimalist table lamp, warm ambient light',category:'home',image:'lamp',price:39.99,original:65,condition:'New',description:'Set the mood with a beautifully simple table lamp. Just right for a desk, nightstand, or reading corner.'},
  {id:'coffee',name:'Coffee lover’s ceramic cup and saucer',category:'home',image:'coffee',price:18.99,original:29.99,condition:'New',description:'Slow mornings start here. A ceramic coffee cup and matching saucer for your daily ritual.'},
  {id:'reading-chair',name:'Contemporary reading chair — neutral finish',category:'home',image:'chair',price:139,original:219,condition:'Excellent — open box',description:'Find a new favorite place to curl up. An open-box accent chair with a clean contemporary shape.'},
  {id:'sports-coupe',name:'Sport coupe — enthusiast’s weekend find',category:'automotive',image:'car',price:32900,original:35900,condition:'Pre-owned',description:'Explore a sample sports coupe listing. Representative vehicle photography; this is a demo, not a real vehicle offer.',pickup:true},
  {id:'classic-coupe',name:'Classic-inspired coupe — collector’s garage',category:'automotive',image:'car',price:28900,original:31500,condition:'Pre-owned',description:'A sample vehicle listing for the enthusiast who loves the open road. Photograph is representative.',pickup:true},
  {id:'weekend-car',name:'Weekend sports car — ready for a new chapter',category:'automotive',image:'car',price:36500,original:38900,condition:'Pre-owned',description:'A sample sports car from our demo garage. Explore the listing and save it to your watchlist.',pickup:true},
  {id:'touring-coupe',name:'Touring coupe — the scenic route awaits',category:'automotive',image:'car',price:24900,original:27900,condition:'Pre-owned',description:'A sample touring coupe listing. Representative photography illustrates the automotive collection.',pickup:true},
];
const CATEGORIES = [{id:'all',name:'All Categories'},{id:'electronics',name:'Electronics'},{id:'fashion',name:'Fashion'},{id:'collectibles',name:'Collectibles'},{id:'home',name:'Home & Garden'},{id:'automotive',name:'Motors'}];
const TILES = [{name:'Sneakers',category:'fashion',image:'sneakers'},{name:'Luxury watches',category:'fashion',image:'watch'},{name:'Electronics',category:'electronics',image:'headphones'},{name:'Handbags',category:'fashion',image:'handbag'},{name:'Collectibles',category:'collectibles',image:'vinyl'},{name:'Home & Garden',category:'home',image:'chair'},{name:'Motors',category:'automotive',image:'car'}];
const SLIDES = [
  {eyebrow:'A LITTLE DIFFERENT. A LOT TO LOVE.',title:'Your next favorite <br>is waiting.',description:'Big brands, rare finds, and everything you’re into. <br>All for a little less.',cta:'Find your thing',category:'all',color:'#ffc63a',orbit:'#ffb81c',images:['headphones','sneakers','camera'],tags:['Turn it up.','Stand out.','Make memories.']},
  {eyebrow:'YOUR STYLE. YOUR WAY.',title:'Good style. <br>Great finds.',description:'Refresh your everyday with pieces that feel like you. <br>There’s a favorite for every budget.',cta:'Explore fashion',category:'fashion',color:'#f7c1d2',orbit:'#efadc4',images:['handbag','sneakers','watch'],tags:['Carry it well.','Go your own way.','Take your time.']},
  {eyebrow:'A LITTLE UPGRADE GOES A LONG WAY.',title:'More wow. <br>Less spend.',description:'Find your next tech obsession at a price to love. <br>Smart finds start here.',cta:'Shop electronics',category:'electronics',color:'#c5d8fb',orbit:'#afc9f7',images:['camera','headphones','console'],tags:['Capture it.','Tune in.','Game on.']},
];
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
const escapeHTML = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const productById = id => PRODUCTS.find(product=>product.id===id);
const icon = name => `<svg aria-hidden="true"><use href="#icon-${name}"/></svg>`;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const STORE_KEY = 'ebay-shopping-demo-v1';
function loadState(){
  try {
    const data=JSON.parse(localStorage.getItem(STORE_KEY));
    if(!data || typeof data!=='object') return {watchlist:[],cart:{}};
    const watchlist=Array.isArray(data.watchlist)?[...new Set(data.watchlist.filter(id=>typeof id==='string'&&productById(id)))]:[];
    const cart={};
    if(data.cart && typeof data.cart==='object'&&!Array.isArray(data.cart)){
      for(const [id,qty] of Object.entries(data.cart)){
        if(productById(id)&&Number.isInteger(qty)&&qty>0&&qty<=99) cart[id]=qty;
      }
    }
    return {watchlist,cart};
  } catch {return {watchlist:[],cart:{}};}
}
const state=loadState();
let activeCategory='all';
let activeQuery='';
let slideIndex=0;
let dialogView=null;
let dialogOpener=null;
let toastTimer;
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800);}
function persist(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state));}catch{toast('Saved for this visit. Browser storage is unavailable.');}updateCounts();syncWatchButtons();}
function updateCounts(){
  const count=Object.values(state.cart).reduce((sum,qty)=>sum+qty,0);
  document.querySelectorAll('.cart-count').forEach(el=>{el.textContent=count;el.hidden=!count;});
  document.querySelectorAll('.watch-count').forEach(el=>{el.textContent=state.watchlist.length;el.hidden=!state.watchlist.length;});
  document.querySelectorAll('.cart-button').forEach(el=>el.setAttribute('aria-label',`Shopping cart, ${count} ${count===1?'item':'items'}`));
}
function watchButton(product){const saved=state.watchlist.includes(product.id);return `<button class="icon-button watch-button" data-watch="${product.id}" aria-pressed="${saved}" aria-label="${saved?'Remove':'Save'} ${escapeHTML(product.name)} ${saved?'from':'to'} watchlist">${icon('heart')}</button>`;}
function syncWatchButtons(){document.querySelectorAll('[data-watch]').forEach(button=>{const product=productById(button.dataset.watch);const saved=state.watchlist.includes(product.id);button.setAttribute('aria-pressed',String(saved));button.setAttribute('aria-label',`${saved?'Remove':'Save'} ${product.name} ${saved?'from':'to'} watchlist`);if(button.classList.contains('detail-watch'))button.innerHTML=`${icon('heart')} ${saved?'Saved to watchlist':'Add to watchlist'}`;});}
function productCard(product){return `<article class="product-card"><div class="product-image-wrap"><button class="product-open" data-product="${product.id}" aria-label="View ${escapeHTML(product.name)}"><img src="assets/images/${product.image}.jpg" alt="${escapeHTML(product.name)}" loading="lazy" width="400" height="400"></button>${watchButton(product)}${product.badge?`<span class="product-badge">${escapeHTML(product.badge)}</span>`:''}</div><button class="product-title" data-product="${product.id}">${escapeHTML(product.name)}</button><div class="price">${money(product.price)}</div><div class="old-price"><s>${money(product.original)}</s> ${Math.round((1-product.price/product.original)*100)}% off</div><p class="shipping">${product.pickup?'Local pickup':'Free shipping'}</p></article>`;}
function initializeHome(){
  $('#category-tiles').innerHTML=TILES.map(tile=>`<button class="category-tile" data-category="${tile.category}"><div class="category-image"><img src="assets/images/${tile.image}.jpg" alt="" loading="lazy" width="180" height="180"></div><span>${escapeHTML(tile.name)}</span></button>`).join('');
  $('#category-menu-items').innerHTML=CATEGORIES.map(cat=>`<button data-category="${cat.id}">${escapeHTML(cat.name)}</button>`).join('');
  $('#deals-rail').innerHTML=PRODUCTS.slice(0,8).map(productCard).join('');
  $('#finds-rail').innerHTML=[PRODUCTS[12],PRODUCTS[16],PRODUCTS[9],PRODUCTS[17],PRODUCTS[10],PRODUCTS[14],PRODUCTS[18],PRODUCTS[15]].map(productCard).join('');
  updateCounts();
  document.querySelectorAll('.product-rail').forEach(rail=>{rail.addEventListener('scroll',updateRailArrows,{passive:true});});
  window.addEventListener('resize',updateRailArrows);
  updateRailArrows();
}
function updateRailArrows(){document.querySelectorAll('[data-scroll]').forEach(button=>{const rail=document.getElementById(button.dataset.scroll);button.disabled=Number(button.dataset.direction)<0?rail.scrollLeft<3:rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-3;});}
function setCategoryMenu(open){$('#category-menu').hidden=!open;$('#category-toggle').setAttribute('aria-expanded',String(open));}
function browse(category='all',query='',scroll=true){
  activeCategory=CATEGORIES.some(cat=>cat.id===category)?category:'all';activeQuery=query.trim();
  $('#search-category').value=activeCategory;$('#search-input').value=activeQuery;
  $('#home-content').hidden=true;$('#results-section').hidden=false;
  setCategoryMenu(false);if($('#shop-dialog').open)closeDialog();
  renderResults();
  if(scroll)$('#results-section').scrollIntoView({behavior:reduceMotion()?'instant':'smooth',block:'start'});
}
function renderResults(){
  const words=activeQuery.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const matches=PRODUCTS.filter(product=>(activeCategory==='all'||product.category===activeCategory)&&words.every(word=>(product.name+' '+product.description).toLocaleLowerCase().includes(word)));
  const category=CATEGORIES.find(cat=>cat.id===activeCategory);
  $('#results-title').textContent=activeQuery?`Results for “${activeQuery}”`:activeCategory==='all'?'All your next favorites':category.name;
  $('#result-count').textContent=`${matches.length} ${matches.length===1?'result':'results'}${activeQuery&&activeCategory!=='all'?` in ${category.name}`:''} · Sample listings`;
  $('#filter-chips').innerHTML=CATEGORIES.map(cat=>`<button class="filter-chip" data-filter="${cat.id}" aria-pressed="${cat.id===activeCategory}">${escapeHTML(cat.name)}</button>`).join('');
  $('#results-grid').innerHTML=matches.map(productCard).join('');$('#empty-results').hidden=matches.length>0;
  document.querySelectorAll('.nav-link[data-category]').forEach(link=>link.classList.toggle('active',link.dataset.category===activeCategory));
  $('.nav-link[data-action="home"]').classList.remove('active');
}
function showHome(){
  $('#home-content').hidden=false;$('#results-section').hidden=true;activeCategory='all';activeQuery='';$('#search-category').value='all';$('#search-input').value='';
  document.querySelectorAll('.nav-link').forEach(link=>link.classList.toggle('active',link.dataset.action==='home'));
  if($('#shop-dialog').open)closeDialog();setCategoryMenu(false);window.scrollTo({top:0,behavior:reduceMotion()?'instant':'smooth'});requestAnimationFrame(updateRailArrows);
}
function setSlide(index){
  slideIndex=(index+SLIDES.length)%SLIDES.length;const slide=SLIDES[slideIndex];
  $('.hero').style.background=slide.color;$('.hero-orbit').style.background=slide.orbit;
  $('#hero-eyebrow').textContent=slide.eyebrow;$('#hero-title').innerHTML=slide.title;$('#hero-description').innerHTML=slide.description;
  $('#hero-cta').innerHTML=`${slide.cta} ${icon('arrow')}`;
  ['one','two','three'].forEach((part,i)=>{$(`#hero-image-${part}`).src=`assets/images/${slide.images[i]}.jpg`;$(`#hero-tag-${part}`).textContent=slide.tags[i];});
  document.querySelectorAll('.slide-dot').forEach((button,i)=>{button.classList.toggle('selected',i===slideIndex);if(i===slideIndex)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
}
function openDialog(view){
  const dialog=$('#shop-dialog');if(!dialog.open)dialogOpener=document.activeElement;
  dialogView=view;renderDialog();setCategoryMenu(false);
  if(!dialog.open)dialog.showModal();
}
function closeDialog(){const dialog=$('#shop-dialog');dialog.close();dialogView=null;if(dialogOpener?.isConnected)dialogOpener.focus({preventScroll:true});}
function renderDialog(){
  const activeKey=$('#shop-dialog').contains(document.activeElement)?document.activeElement.dataset.focusKey:null;
  const content=$('#dialog-content');const dialog=$('#shop-dialog');dialog.classList.toggle('basket-dialog',dialogView.type==='cart'||dialogView.type==='watchlist');
  if(dialogView.type==='product'){
    const product=productById(dialogView.id);$('#dialog-title').textContent='A closer look';
    content.innerHTML=`<div class="detail-layout"><div class="detail-image"><img src="assets/images/${product.image}.jpg" alt="${escapeHTML(product.name)}"></div><div class="detail-info"><h3>${escapeHTML(product.name)}</h3><div class="price">${money(product.price)}</div><div class="old-price"><s>${money(product.original)}</s> ${Math.round((1-product.price/product.original)*100)}% off</div><p>${escapeHTML(product.description)}</p><div class="detail-meta"><p><strong>Condition:</strong> ${escapeHTML(product.condition)}<br><strong>Delivery:</strong> ${product.pickup?'Local pickup arranged with seller':'Free standard shipping'}<br><strong>Seller:</strong> The Great Finds Shop · Demo seller</p></div><div class="detail-actions"><button class="pill-button blue-button" data-add="${product.id}">${icon('cart')} Add to cart</button><button class="pill-button outline detail-watch" data-watch="${product.id}" aria-pressed="false">${icon('heart')} Add to watchlist</button></div><p class="demo-note">Sample listing. Photography is representative. No purchases are processed.</p></div></div>`;
    syncWatchButtons();
  } else if(dialogView.type==='cart'||dialogView.type==='watchlist'){
    const cart=dialogView.type==='cart';const ids=cart?Object.keys(state.cart):state.watchlist;
    $('#dialog-title').textContent=cart?'Your shopping cart':`Your watchlist (${ids.length})`;
    if(!ids.length){content.innerHTML=`<div class="empty-state">${icon(cart?'cart':'heart')}<h2>${cart?'Your next find is out there.':'Keep your favorites close.'}</h2><p>${cart?'Add something you love to get started.':'Tap the heart on any item to save it here.'}</p><button class="pill-button dark" data-action="close-dialog">Keep exploring ${icon('arrow')}</button></div>`;}
    else {
      content.innerHTML=ids.map(id=>{const product=productById(id);return `<article class="basket-item"><img src="assets/images/${product.image}.jpg" alt="${escapeHTML(product.name)}"><div><h3><button class="product-name-button" data-product="${id}">${escapeHTML(product.name)}</button></h3><div class="price">${money(product.price)}</div><p class="shipping">${product.pickup?'Local pickup':'Free shipping'}</p><div class="basket-controls">${cart?`<div class="quantity" aria-label="Quantity for ${escapeHTML(product.name)}"><button data-quantity="${id}" data-delta="-1" data-focus-key="minus-${id}" aria-label="Decrease quantity for ${escapeHTML(product.name)}" ${state.cart[id]===1?'disabled':''}>−</button><span aria-live="polite">${state.cart[id]}</span><button data-quantity="${id}" data-delta="1" data-focus-key="plus-${id}" aria-label="Increase quantity for ${escapeHTML(product.name)}" ${state.cart[id]===99?'disabled':''}>+</button></div>`:''}<button class="remove-item" ${cart?`data-remove-cart="${id}"`:`data-watch="${id}"`} data-focus-key="remove-${id}">Remove</button></div></div>${cart?'':`<button class="pill-button outline" data-add="${id}">Add to cart</button>`}</article>`;}).join('');
      if(cart){const subtotal=ids.reduce((sum,id)=>sum+productById(id).price*state.cart[id],0);const count=ids.reduce((sum,id)=>sum+state.cart[id],0);content.innerHTML+=`<div class="basket-summary"><span>Subtotal (${count} ${count===1?'item':'items'})</span><span id="cart-subtotal">${money(subtotal)}</span></div><button class="pill-button blue-button checkout-button" data-info="Checkout">Continue to checkout ${icon('arrow')}</button><p class="demo-note">Demo cart only. No payment or order will be created.</p>`;}
    }
  } else if(dialogView.type==='categories'){
    $('#dialog-title').textContent='Shop by category';content.innerHTML=`<div class="filter-chips">${CATEGORIES.map(cat=>`<button class="filter-chip" data-category="${cat.id}">${escapeHTML(cat.name)}</button>`).join('')}</div>`;
  } else {
    $('#dialog-title').textContent=dialogView.title;
    const messages={
      'Sign in':['Welcome to your next great find.','This is an interactive shopping demo. Search, save favorites, and build a cart without an account. Sign-in is not connected, and no credentials are collected.'],
      'Register':['All the exploring. No account needed.','Your watchlist and cart are saved in this browser. Account registration is not connected in this demo.'],
      'Selling':['Give your great stuff a second story.','Seller listings, uploads, and auctions are not connected in this demo. Explore the sample catalog to see how your future marketplace could feel.'],
      'Checkout':['You’ve got great taste.','This is a demo checkout. No payment will be collected and no order will be placed. Your cart stays saved so you can keep exploring.'],
      'Privacy':['Your finds stay in this browser.','This demo stores only product IDs, watchlist choices, and cart quantities in your browser’s local storage. It has no accounts, analytics, or payment collection.'],
      'Shopping with confidence':['A little peace of mind.','This sample storefront demonstrates the shopping experience. Items, seller details, prices, and shipping terms are illustrative; no purchases or guarantees are provided.'],
      'Advanced search':['Find something that’s very you.','Use the search bar to find words in product names and descriptions. Choose a category to narrow things down, or reset filters to explore every sample listing.'],
      'Accessibility':['Made for more ways to explore.','Browse with your keyboard, use the labeled search and category controls, and press Escape to close a dialog. Animations respect your reduced-motion preference.'],
      'Region':['A whole world of possibilities.','This demo uses English and US dollar prices. Region and currency switching are not connected.'],
      'eBay Live':['Finds worth tuning in for.','Live streams and live auctions are not connected in this sample storefront. There are 24 sample listings to explore instead.'],
    };
    const message=messages[dialogView.title]||['A little more about this demo.','This area is a placeholder in the shopping demo. You can browse 24 sample products, search by keyword and category, save a watchlist, and manage your cart.'];
    content.innerHTML=`<div class="info-content"><span class="demo-label">SHOPPING DEMO</span><h3>${escapeHTML(message[0])}</h3><p>${escapeHTML(message[1])}</p><button class="pill-button dark" data-action="close-dialog">Keep exploring ${icon('arrow')}</button></div>`;
  }
  if(activeKey){const target=content.querySelector(`[data-focus-key="${CSS.escape(activeKey)}"]`);if(target&&!target.disabled)target.focus({preventScroll:true});else $('.dialog-heading button').focus({preventScroll:true});}
}
function addToCart(id){if(!productById(id))return;const qty=state.cart[id]||0;if(qty>=99){toast('Maximum quantity is 99 per item.');return;}state.cart[id]=qty+1;persist();toast('Added to your cart');if(dialogView?.type==='cart')renderDialog();}
function toggleWatch(id){if(!productById(id))return;const index=state.watchlist.indexOf(id);if(index===-1)state.watchlist.push(id);else state.watchlist.splice(index,1);persist();toast(index===-1?'Saved to your watchlist':'Removed from your watchlist');if(dialogView?.type==='watchlist')renderDialog();}

$('#search-form').addEventListener('submit',event=>{event.preventDefault();browse($('#search-category').value,$('#search-input').value);});
$('#search-category').addEventListener('change',()=>{if(!$('#results-section').hidden)browse($('#search-category').value,$('#search-input').value,false);});
$('#category-toggle').addEventListener('click',()=>setCategoryMenu($('#category-menu').hidden));
$('#hero-cta').addEventListener('click',()=>browse(SLIDES[slideIndex].category));
document.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(!event.target.closest('.category-control'))setCategoryMenu(false);
  if(!button||button.disabled)return;
  if(button.dataset.product){openDialog({type:'product',id:button.dataset.product});return;}
  if(button.dataset.watch){toggleWatch(button.dataset.watch);return;}
  if(button.dataset.add){addToCart(button.dataset.add);return;}
  if(button.dataset.category){browse(button.dataset.category);return;}
  if(button.dataset.filter){browse(button.dataset.filter,activeQuery,false);document.querySelector(`[data-filter="${button.dataset.filter}"]`)?.focus({preventScroll:true});return;}
  if(button.dataset.info){openDialog({type:'info',title:button.dataset.info});return;}
  if(button.dataset.slide!==undefined){setSlide(Number(button.dataset.slide));return;}
  if(button.dataset.scroll){const rail=document.getElementById(button.dataset.scroll);rail.scrollBy({left:rail.clientWidth*.85*Number(button.dataset.direction),behavior:reduceMotion()?'instant':'smooth'});return;}
  if(button.dataset.quantity){const id=button.dataset.quantity;state.cart[id]=Math.min(99,Math.max(1,state.cart[id]+Number(button.dataset.delta)));persist();renderDialog();return;}
  if(button.dataset.removeCart){delete state.cart[button.dataset.removeCart];persist();renderDialog();toast('Removed from your cart');return;}
  switch(button.dataset.action){
    case 'home':showHome();break;
    case 'all-products':browse();break;
    case 'reset':browse();break;
    case 'watchlist':openDialog({type:'watchlist'});break;
    case 'cart':openDialog({type:'cart'});break;
    case 'close-dialog':closeDialog();break;
    case 'categories':openDialog({type:'categories'});break;
    case 'next-slide':setSlide(slideIndex+1);break;
    case 'previous-slide':setSlide(slideIndex-1);break;
    case 'deals':showHome();requestAnimationFrame(()=>$('#deals-section').scrollIntoView({behavior:reduceMotion()?'instant':'smooth',block:'start'}));break;
  }
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#category-menu').hidden){setCategoryMenu(false);$('#category-toggle').focus();}});
$('.category-control').addEventListener('focusout',event=>{if(!event.currentTarget.contains(event.relatedTarget))setCategoryMenu(false);});
$('#shop-dialog').addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
$('#shop-dialog').addEventListener('click',event=>{if(event.target===$('#shop-dialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeDialog();}});
window.addEventListener('storage',event=>{if(event.key!==STORE_KEY&&event.key!==null)return;const fresh=loadState();state.watchlist=fresh.watchlist;state.cart=fresh.cart;updateCounts();syncWatchButtons();if(dialogView?.type==='cart'||dialogView?.type==='watchlist')renderDialog();});
initializeHome();
