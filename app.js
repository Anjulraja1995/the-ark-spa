(function(){
  const DEFAULT={
    phone:'9584885121', whatsapp:'9584885121', address:'Shop no. 30, 2nd Floor, Malhar Mall, Vijay Nagar, Indore',
    bookingMode:'both', bookingEnabled:true,
    brand:{name:'The Ark Spa & Salon',tagline:'Reducing Stress · Increasing Relaxation',logoUrl:'assets/ark-logo-reference.png',heroImage:'assets/ark-buddha-reference.png'},
    social:{instagram:'',facebook:'',youtube:'',x:'',whatsapp:''},
    footer:{about:'Reducing Stress · Increasing Relaxation',copyright:'© 2026 The Ark Spa & Salon. All Rights Reserved.'},
    menu:[
      {category:'Full Body Massage',name:'Deep Tissue Massage',description:'A strong full body massage releasing deep, muscular soreness and tension.',duration:'60/90 minutes',rate:'₹3499/4499'},
      {category:'Full Body Massage',name:'Swedish Massage',description:'Traditional European full body massage techniques are applied to relax aching muscles, stimulate circulation and eliminate toxins so that you look great and feel even better.',duration:'60/90 minutes',rate:'₹3499/4499'},
      {category:'Full Body Massage',name:'Aromatic Relaxation Massage',description:'This light-pressured massage uses long, soothing strokes and the aroma therapy of essential oils to achieve total calm and relaxation.',duration:'60/90 minutes',rate:'₹3499/4499'},
      {category:'Full Body Massage',name:'Lomi Lomi Massage',description:'This traditional Hawaiian “loving hands” massage uses percussive and wave-like movements with smooth strokes to induce a total state of relaxation. Jasmine oil is used for its aromatherapeutic benefits.',duration:'60/90 minutes',rate:'₹3299/4299'},
      {category:'Full Body Massage',name:'Jet Log Recovery',description:'A rebalancing treatment including a body massage with aromatherapy oil to revive circulation and ease muscle tension, a head massage to re-awaken your senses and a Six Senses herbal tea to reset your internal clock.',duration:'60/90 minutes',rate:'₹3499/4499'},
      {category:'Asian Therapy',name:'Moroccan Hot Oil Massage',description:'Using warmed aromatic jasmine oil from Morocco, this massage will smooth your skin as your mind and body are transformed into a complete state of relaxation, induced by slow, enveloping strokes.',duration:'60/90 minutes',rate:'₹3299/4299'},
      {category:'Asian Therapy',name:'Couples Massage',description:'Couples of all kinds—sisters, friends, partners—enjoy the Aromatic Relaxation or Swedish Tonic Massage together.',duration:'120 minutes',rate:'₹9999'},
      {category:'Asian Therapy',name:'Thai Herbal Massage',description:'This is an original blend of Thai massage using the classic Thai healing herbal packs. While the acupressure works on the meridian lines, the heated herbal compress helps to improve prana flow, ease aches and stimulates circulation.',duration:'90/120 minutes',rate:'₹3999/5999'},
      {category:'Asian Therapy',name:'Thai Herbal Oil Massage',description:'This energising full body oil massage utilises scented herbal poultices that are heated and applied to pressure points on the body. Wild turmeric, lemongrass, cinnamon and tamarind are just some of the herbs that will condition the skin and take your body on an exotic journey of total renewal.',duration:'90/120 minutes',rate:'₹4999/6999'},
      {category:'Asian Therapy',name:'Thai Massage',description:'Using Thai massage techniques, this treatment focuses on pressure points and gentle stretching movements along the body’s energy channels. It is offered fully clothed and without oil to re-awaken the body’s energy flow.',duration:'60/90 minutes',rate:'₹3899/4899'},
      {category:'Asian Therapy',name:'Vietnamese Hot Stone Massage',description:'This traditional oil massage incorporates pressure point techniques with invigorating movements to warm and relax muscle tissue. Heated small suction stones are placed on the back to aid in muscle relaxation, improve circulation and rejuvenate the body.',duration:'120/180 minutes',rate:'₹7999/9999'},
      {category:'Foot Therapy',name:'Foot Acupressure',description:'Reflex points on the feet correspond to every organ in the body. Applying pressure to these points, the autonomic nervous, lymphatic and circulation systems are stimulated to heal and balance the body. Ideal when combined with Indian Head Massage.',duration:'30/60 minutes',rate:'₹1599/2499'},
      {category:'Foot Therapy',name:'Detox Upper Arm',description:'Your hands and arms are treated to an exfoliation and specialised firming mask including a rich concentrate of essential oils which helps to firm, tone and tighten the skin.',duration:'45/60 minutes',rate:'₹1999/2499'},
      {category:'Foot Therapy',name:'Detoxifier Package',description:'Give your body a boost and rid your system of unwanted toxins to enhance energy levels and break dependence on system stimulants. Rejuvenating and enhancing skin vitality.',duration:'3hr 50 minutes',rate:'₹8999'},
      {category:'Foot Therapy',name:'Shiatsu',description:'This time-honoured and invigorating full body massage applies pressure along the meridian lines to release trapped energy and restore natural balance and well being.',duration:'60/90 minutes',rate:'₹3699/4899'},
      {category:'Foot Therapy',name:'Traditional Tibetan Massage',description:'This classical technique of manipulating muscles with aromatic massage oils is both relaxing and invigorating. This massage improves overall wellbeing, while providing tonic for the soul.',duration:'60/90 minutes',rate:'₹3499/4499'},
      {category:'Scrubbed Therapy',name:'Siamese Herbal Scrub',description:'Our Siamese Herbal scrub is a must! Following in the steps of our Ancestors we use Thai herbs alongside traditional techniques, which have been used as a Thai beauty ritual for centuries. Soothe your stresses, release harmful toxins and let the senses of Thailand come to you.',duration:'120/180 minutes',rate:'₹6999/7999'},
      {category:'Scrubbed Therapy',name:'Tamarind Skin Exfoliation',description:'Tamarind provides cleansing and nourishing properties uplifting and reviving the skin whilst exfoliating with natural rice meal to give the skin a radiant glow. Our treatment will help to promote skin resistance to wrinkles and maintain the balance between preventing a build up of dead cells and encouraging cell renewal.',duration:'120/180 minutes',rate:''},
      {category:'Scrubbed Therapy',name:'Cinnamon Ginger Scrub',description:'Invigorate your senses with this delightful Cinnamon and ginger scrub. This treatment will help remove dead skin cells, help boost your skin’s protection & healing process, and leave your skin smelling & looking delicious.',duration:'120/180 minutes',rate:'₹5999/6999'},
      {category:'Scrubbed Therapy',name:'Body Polishing & Therapy',description:'A body polish is a popular body treatment that exfoliates and hydrates your skin, leaving it smooth and soft. The best way to think about a body polish is that it is a treatment for the body. In a spa, the body polish is followed by a shower and body lotion. It should not be confused with a massage which targets the muscles.',duration:'60/90 minutes',rate:'₹3599/4599'}
    ],
    gallery:[
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90'
    ],
    offers:[]
  };

  window.ARK_DEFAULT=DEFAULT;
  window.arkData=JSON.parse(JSON.stringify(DEFAULT));

  function mergeMenu(saved){
    if(!Array.isArray(saved)||!saved.length) return JSON.parse(JSON.stringify(DEFAULT.menu));
    const byName=new Map(saved.map(x=>[String(x.name||'').trim(),x]));
    return DEFAULT.menu.map(d=>{
      const s=byName.get(d.name); return s?{...d,rate:s.rate??d.rate,duration:s.duration??d.duration,description:d.description}:d;
    });
  }
  function merge(saved){
    saved=saved||{};
    const customLogo=saved.brand&&saved.brand.logoUrl?saved.brand.logoUrl:'';
    return {
      ...DEFAULT,...saved,
      phone:saved.phone||DEFAULT.phone, whatsapp:saved.whatsapp||saved.phone||DEFAULT.whatsapp,
      address:saved.address||DEFAULT.address,
      bookingMode:['both','whatsapp','website','none'].includes(saved.bookingMode)?saved.bookingMode:DEFAULT.bookingMode,
      brand:{...DEFAULT.brand,logoUrl:customLogo||DEFAULT.brand.logoUrl},
      social:{...DEFAULT.social,...(saved.social||{})},
      footer:{...DEFAULT.footer,...(saved.footer||{})},
      menu:mergeMenu(saved.menu),
      gallery:Array.isArray(saved.gallery)&&saved.gallery.length?saved.gallery:JSON.parse(JSON.stringify(DEFAULT.gallery)),
      offers:(Array.isArray(saved.offers)?saved.offers:(saved.offers&&typeof saved.offers==='object'?Object.values(saved.offers).filter(Boolean):[]))
    };
  }

  window.arkLoad=async function(){
    if(!window.firebaseReady||!window.db) return window.arkData;
    try{const s=await db.ref('siteContent').once('value'); window.arkData=merge(s.exists()?s.val():{});}
    catch(e){console.warn('Site content unavailable; using safe defaults.',e);window.arkData=merge(window.arkData)}
    return window.arkData;
  };
  window.arkSave=async function(patch){
    if(!window.firebaseReady||!window.db) throw new Error('Firebase is unavailable');
    await db.ref('siteContent').update(patch);
    window.arkData=merge({...window.arkData,...patch});
    return window.arkData;
  };
  window.escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.escapeAttr=s=>escapeHtml(s).replace(/`/g,'&#96;');
  window.formatMoney=n=>'₹'+Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2});
  window.parseRateParts=function(rate){
    if(!rate) return [];
    return String(rate).split('/').map(x=>x.trim()).filter(Boolean).map(x=>{
      const m=x.match(/(\d[\d,]*(?:\.\d+)?)/); if(!m)return null;
      const v=Number(m[1].replace(/,/g,'')); return Number.isFinite(v)?{raw:x,value:v}:null;
    }).filter(Boolean);
  };
  window.discountedRateParts=function(rate,pct){
    const p=parseRateParts(rate); if(!p.length)return null; const d=Math.max(0,Math.min(100,Number(pct)||0));
    return p.map(x=>({...x,discounted:Math.round(x.value*(100-d))/100}));
  };
  window.getActiveOffers=()=>Array.isArray(arkData.offers)?arkData.offers.filter(o=>o&&o.active):[];
  window.offerApplies=function(o,item){
    if(!o||!item)return false;
    if(o.type==='percentage'){
      const scope=o.scopeType||o.scope||'all';
      if(scope==='all'||scope==='all-menu-rates')return true;
      if(scope==='category')return item.category===o.category;
      if(scope==='services')return (o.serviceNames||[]).includes(item.name);
      return false;
    }
    if(o.type==='special'){
      const scope=o.scopeType||o.scope||'all';
      if(scope==='all')return true;
      if(scope==='category')return item.category===o.category;
      if(scope==='services')return (o.serviceNames||[]).includes(item.name);
    }
    return false;
  };
  window.getApplicableOffers=function(name){
    const item=(arkData.menu||[]).find(x=>x.name===name); if(!item)return getActiveOffers();
    return getActiveOffers().filter(o=>offerApplies(o,item));
  };
  window.rateHtml=function(item){
    const rate=item.rate||''; if(!rate)return '<span class="rate-empty">Rate not supplied</span>';
    const pct=getActiveOffers().find(o=>o.type==='percentage'&&offerApplies(o,item));
    const special=getActiveOffers().find(o=>o.type==='special'&&offerApplies(o,item));
    if(special)return `<span class="rate-pair"><del>${escapeHtml(rate)}</del><strong>${formatMoney(special.rate)}</strong></span>`;
    if(pct){const parts=discountedRateParts(rate,pct.percent);return parts.map(p=>`<span class="rate-pair"><del>${escapeHtml(p.raw)}</del><strong>${formatMoney(p.discounted)}</strong></span>`).join(' / ')}
    return `<span class="rate-normal">${escapeHtml(rate)}</span>`;
  };
  window.wa=function(message){
    const n=(arkData.whatsapp||DEFAULT.whatsapp).replace(/\D/g,'');
    window.open('https://wa.me/91'+n+'?text='+encodeURIComponent(message||'Hello The Ark Spa & Salon, I would like to book an appointment.'),'_blank','noopener');
  };
  window.callArk=()=>{location.href='tel:'+(arkData.phone||DEFAULT.phone)};
  window.mapArk=()=>window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(arkData.address||DEFAULT.address),'_blank','noopener');
  window.socialIcon=function(key){const a='<svg viewBox="0 0 24 24" aria-hidden="true">';const z='</svg>';if(key==='instagram')return a+'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'+z;if(key==='facebook')return a+'<path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z" fill="currentColor"/>'+z;if(key==='youtube')return a+'<path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.4 6 12 6 12 6s-5.4 0-7.1.3A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.7 12 28 28 0 0 0 3 15.8a2.7 2.7 0 0 0 1.9 1.9C6.6 18 12 18 12 18s5.4 0 7.1-.3a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .3-3.8 28 28 0 0 0-.3-3.8Z" fill="currentColor"/><path d="m10 9 5 3-5 3V9Z" fill="#073f2d"/>'+z;if(key==='x')return a+'<path d="M5 4h4.2l3.2 4.5L16.2 4H19l-5.4 6.2L19.5 20h-4.2l-3.7-5-4.4 5H4.5l5.8-6.7L5 4Zm3.1 2 7.7 12h1.1L9.2 6H8.1Z" fill="currentColor"/>'+z;return a+'<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Z" fill="currentColor"/><path d="M9.3 7.5c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.5 2.5 3.7 3.4 1.8.7 2.2.6 2.6.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.7-.4-.4-.2-1.3-.7-1.5-.7-.2-.1-.4-.1-.6.2-.2.4-.5.7-.6.9-.1.2-.3.2-.6.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.4-1.2-1.6-.1-.2 0-.3.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.5-1.3Z" fill="currentColor"/>'+z};
  window.socialLabel=function(key){return ({instagram:'Instagram',facebook:'Facebook',youtube:'YouTube',x:'X / Twitter'})[key]||key};
  window.renderSocials=function(container){
    if(!container)return;
    const keys=['instagram','facebook','youtube','x'];
    container.innerHTML=keys.map(k=>{const href=arkData.social&&arkData.social[k]?String(arkData.social[k]).trim():'';const icon=socialIcon(k);if(href)return `<a class="social-icon social-${k}" href="${escapeAttr(href)}" target="_blank" rel="noopener" aria-label="${socialLabel(k)}" title="${socialLabel(k)}">${icon}</a>`;return `<span class="social-icon social-${k} social-inactive" aria-label="${socialLabel(k)}" title="${socialLabel(k)} — link not added yet">${icon}</span>`}).join('');
  };
  window.renderBrand=function(){
    document.querySelectorAll('[data-brand-logo]').forEach(el=>{el.src=arkData.brand.logoUrl||DEFAULT.brand.logoUrl;el.onerror=()=>{el.src=DEFAULT.brand.logoUrl}});
    document.querySelectorAll('[data-brand-name]').forEach(el=>el.textContent=arkData.brand.name);
    document.querySelectorAll('[data-brand-tagline]').forEach(el=>el.textContent=arkData.brand.tagline);
  };
  let siteContentListener=null;
  window.applyArkSiteData=function(){
    renderBrand();
    document.querySelectorAll('[data-phone]').forEach(e=>e.textContent=arkData.phone);
    document.querySelectorAll('[data-address]').forEach(e=>e.textContent=arkData.address);
    document.querySelectorAll('[data-footer-about]').forEach(e=>e.textContent=arkData.footer.about);
    document.querySelectorAll('[data-socials]').forEach(renderSocials);
    document.querySelectorAll('[data-call]').forEach(a=>a.onclick=e=>{e.preventDefault();callArk()});
    document.querySelectorAll('[data-map]').forEach(a=>a.onclick=e=>{e.preventDefault();mapArk()});
    document.querySelectorAll('[data-wa]').forEach(a=>{a.onclick=e=>{e.preventDefault();wa(a.dataset.wa||'Hello The Ark Spa & Salon, I would like to book an appointment.')}});
    document.querySelectorAll('[data-book]').forEach(a=>a.href='appointment.html');
  };
  window.initSite=async function(){
    await arkLoad();
    applyArkSiteData();
    if(window.firebaseReady&&window.db){
      if(siteContentListener)db.ref('siteContent').off('value',siteContentListener);
      siteContentListener=snap=>{
        if(!snap.exists())return;
        window.arkData=merge(snap.val());
        applyArkSiteData();
        window.dispatchEvent(new CustomEvent('arkSiteDataUpdated',{detail:window.arkData}));
      };
      db.ref('siteContent').on('value',siteContentListener,err=>console.warn('Live site settings sync unavailable:',err));
    }
  };
  window.toggleMobileNav=function(){document.getElementById('mobileDrawer')?.classList.toggle('show')};
  window.closeMobileNav=function(){document.getElementById('mobileDrawer')?.classList.remove('show')};
  window.openBookingChooser=function(){
    const mode=arkData.bookingMode||'both';
    if(mode==='whatsapp'){wa('Hello The Ark Spa & Salon, I would like to book an appointment.');return;}
    if(mode==='website'){location.href='appointment.html';return;}
    if(mode==='none'){alert('Online booking is currently unavailable. Please call or WhatsApp The Ark Spa & Salon.');return;}
    const m=document.createElement('div');m.className='modal show';m.innerHTML=`<div class="modal-box booking-choice"><button class="close">×</button><div class="choice-logo"><img src="${escapeAttr(arkData.brand.logoUrl||DEFAULT.brand.logoUrl)}" alt="The Ark logo"></div><h3>Book Your Appointment</h3><p>Choose how you would like to book.</p><div class="choice-grid"><button class="choice-card" data-choice="website"><span>📅</span><b>Website Booking</b><small>Fill the appointment form</small></button><button class="choice-card" data-choice="wa"><span>💬</span><b>WhatsApp Booking</b><small>Open WhatsApp directly</small></button></div></div>`;
    m.querySelector('.close').onclick=()=>m.remove();m.addEventListener('click',e=>{const c=e.target.closest('[data-choice]');if(!c)return;m.remove();c.dataset.choice==='wa'?wa('Hello The Ark Spa & Salon, I would like to book an appointment.'):location.href='appointment.html'});document.body.appendChild(m);
  };
})();
