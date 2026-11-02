/* Hands of Hope Foundation — Part 3 interactions and client-side form validation */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  // Responsive navigation: mouse/touch, keyboard Escape, and close after navigation.
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#primary-navigation');
  if (navToggle && navigation) {
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      const label = navToggle.querySelector('.nav-toggle-label');
      if (label) label.textContent = 'Menu';
    };
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navigation.classList.toggle('is-open', !open);
      const label = navToggle.querySelector('.nav-toggle-label');
      if (label) label.textContent = open ? 'Menu' : 'Close';
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
        closeMenu(); navToggle.focus();
      }
    });
  }

  // Dynamic programme content from JSON, with working search, category filters and sorting.
  const list = document.querySelector('#programme-list');
  const search = document.querySelector('#programme-search');
  const sort = document.querySelector('#programme-sort');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const status = document.querySelector('#filter-status');
  if (list && search && sort && filterButtons.length) {
    let programmes = [];
    let currentFilter = 'all';
    const make = (tag, className, text) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    };
    const render = () => {
      if (!programmes.length) return; // Preserve the static fallback until JSON has loaded.
      const query = search.value.trim().toLocaleLowerCase();
      let result = programmes.filter(item => {
        const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
        const haystack = `${item.title} ${item.kicker} ${item.description} ${item.actions.join(' ')}`.toLocaleLowerCase();
        return matchesCategory && haystack.includes(query);
      });
      if (sort.value === 'title-asc') result.sort((a,b) => a.title.localeCompare(b.title));
      if (sort.value === 'title-desc') result.sort((a,b) => b.title.localeCompare(a.title));
      list.replaceChildren();
      result.forEach((item, resultIndex) => {
        const article = make('article','programme-detail'); article.id = item.id; article.dataset.category = item.category;
        article.append(make('div','programme-number',String(resultIndex+1).padStart(2,'0')));
        const copy = make('div','programme-detail-copy');
        copy.append(make('p','card-kicker',item.kicker),make('h3','',item.title),make('p','',item.description),make('h4','', 'Ways to contribute'));
        const ul = make('ul'); item.actions.forEach(action => ul.append(make('li','',action))); copy.append(ul);
        const link = make('a','text-link',item.cta+' →'); link.href = `enquiry.html?interest=${encodeURIComponent(item.interest)}`; copy.append(link);
        const img = make('img'); img.src = item.image; img.alt = item.alt; img.width = 960; img.height = 640; img.loading = 'lazy'; img.decoding = 'async';
        article.append(copy,img); list.append(article);
      });
      if (status) status.textContent = result.length ? `Showing ${result.length} ${result.length === 1 ? 'programme' : 'programmes'}.` : 'No programmes match your search. Try another word or clear the search.';
      list.setAttribute('aria-busy','false');
      let empty = document.querySelector('#programme-empty-state');
      if (!result.length) {
        if (!empty) { empty = make('p','empty-state'); empty.id='programme-empty-state'; empty.append(document.createTextNode('No programmes match those filters. ')); const clear=make('button','text-button','Clear search and filters'); clear.type='button'; clear.addEventListener('click',()=>{search.value='';sort.value='default';currentFilter='all';filterButtons.forEach(b=>{const active=b.dataset.filter==='all';b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});render();search.focus();}); empty.append(clear); }
        list.after(empty);
      } else if (empty) empty.remove();
    };
    filterButtons.forEach(button => button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      filterButtons.forEach(item => { const active=item===button; item.classList.toggle('is-active',active); item.setAttribute('aria-pressed',String(active)); });
      render();
    }));
    search.addEventListener('input',render); sort.addEventListener('change',render);
    list.setAttribute('aria-busy','true');
    fetch('js_assets/programmes.json').then(response => { if (!response.ok) throw new Error('Programme data could not be loaded'); return response.json(); })
      .then(data => { if (!Array.isArray(data)) throw new Error('Unexpected programme data format'); programmes=data; render(); })
      .catch(() => { list.setAttribute('aria-busy','false'); if (status) status.textContent='Showing the built-in programme list. Dynamic loading was unavailable, but the page content remains available.'; search.disabled=true; sort.disabled=true; filterButtons.forEach(button=>{button.disabled=true;}); /* Keep the static fallback if fetch fails. */ });
  }

  // Accessible gallery lightbox using the native dialog element.
  const dialog = document.querySelector('#lightbox-dialog');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  let lastGalleryTrigger = null;
  if (dialog && lightboxImage) {
    document.querySelectorAll('[data-lightbox-src]').forEach(button => button.addEventListener('click', () => {
      lastGalleryTrigger = button;
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt || '';
      if (lightboxCaption) lightboxCaption.textContent = button.querySelector('span')?.textContent.trim() || 'Image preview';
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open','');
      dialog.querySelector('[data-lightbox-close]')?.focus();
    }));
    const close = () => { if (typeof dialog.close === 'function' && dialog.open) dialog.close(); else dialog.removeAttribute('open'); if (lastGalleryTrigger) lastGalleryTrigger.focus(); };
    dialog.querySelector('[data-lightbox-close]')?.addEventListener('click',close);
    dialog.addEventListener('click',event=>{ if(event.target===dialog) close(); });
    dialog.addEventListener('close',()=>{ if(lastGalleryTrigger) lastGalleryTrigger.focus(); });
  }

  // Interactive Leaflet map. If third-party tiles/scripts are unavailable, keep an explanatory fallback.
  const mapElement = document.querySelector('#community-map');
  if (mapElement) {
    if (window.L) {
      try {
        mapElement.replaceChildren();
        const map = L.map(mapElement,{scrollWheelZoom:false}).setView([-25.7479,28.2293],11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(map);
        const marker=L.marker([-25.7479,28.2293]).addTo(map);
        marker.bindPopup('<strong>Illustrative project area</strong><br>Pretoria, South Africa<br><small>This is not a real office or service location.</small>');
        marker.openPopup();
      } catch (error) {
        mapElement.innerHTML='<p class="map-fallback">The map could not be initialised. This project uses Pretoria as an illustrative area only.</p>';
      }
    } else {
      mapElement.innerHTML='<p class="map-fallback">The interactive map requires an internet connection to load Leaflet and OpenStreetMap tiles. Pretoria is shown as an illustrative area only, not a real office.</p>';
    }
  }

  // Character counts and form validation. Contact prepares a mailto draft; enquiry gives a tailored local response.
  document.querySelectorAll('[data-character-count]').forEach(counter => {
    const field=document.getElementById(counter.dataset.characterCount); if(!field)return;
    const update=()=>{counter.textContent=String(field.value.length);}; field.addEventListener('input',update);update();
  });
  const validators={
    name:value=>value.trim().length>=2?'':'Please enter at least 2 characters.',
    email:value=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())?'':'Enter a valid email address, such as name@example.com.',
    interest:value=>value?'':'Please choose an area of interest.',
    reason:value=>value?'':'Please choose a topic.',
    message:value=>value.trim().length>=10?'':'Please provide at least 10 characters so the enquiry has enough context.',
    consent:checked=>checked?'':'Please confirm that you understand this is a demonstration form.'
  };
  document.querySelectorAll('.js-enquiry-form').forEach(form=>{
    const feedback=form.querySelector('.form-feedback');
    const fields=[...form.querySelectorAll('input,select,textarea')];
    const errorFor=field=>document.getElementById(`${field.id}-error`);
    const validateField=field=>{
      const rule=validators[field.name];if(!rule)return '';
      const message=field.type==='checkbox'?rule(field.checked):rule(field.value);
      field.setAttribute('aria-invalid',String(Boolean(message)));
      const error=errorFor(field);if(error)error.textContent=message;
      return message;
    };
    fields.forEach(field=>{
      field.addEventListener('blur',()=>validateField(field));
      field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validateField(field);if(feedback&&!feedback.hidden)feedback.hidden=true;});
      field.addEventListener('change',()=>{if(field.hasAttribute('aria-invalid'))validateField(field);});
    });
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const errors=fields.map(field=>({field,message:validateField(field)})).filter(item=>item.message);
      if(errors.length){if(feedback){feedback.hidden=false;feedback.classList.add('is-error');feedback.textContent=`Please review ${errors.length} ${errors.length===1?'field':'fields'} marked below, then try again.`;}errors[0].field.focus();return;}
      const data=new FormData(form);const name=String(data.get('name')||'').trim();const email=String(data.get('email')||'').trim();const topic=String(data.get('interest')||data.get('reason')||'General enquiry').trim();const message=String(data.get('message')||'').trim();
      const isContact=form.dataset.formKind==='contact';
      const subject=isContact?`Hands of Hope demo contact: ${topic}`:`Hands of Hope demo enquiry: ${topic}`;
      const summary=`${isContact?'GENERAL CONTACT MESSAGE':'GET INVOLVED ENQUIRY'}\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`;
      if(feedback){feedback.classList.remove('is-error');feedback.hidden=false;feedback.replaceChildren();
        const heading=document.createElement('h4');heading.textContent=isContact?'Your email draft is ready':'Thank you — here is the next step';
        const paragraph=document.createElement('p');
        if(isContact){paragraph.textContent='Your message passed validation. Choose the button below to open your default email application with the message prepared. The recipient is a reserved example address for this fictional student project, not a live inbox.';}
        else {const responses={ 'Volunteering':'Thank you for your interest in volunteering. In a real service, the next step would be to confirm the activity, date, availability and any preparation needed.', 'Food drive':'Thank you for asking about food drives. A real coordinator would confirm current priority items, collection arrangements and suitable dates before accepting supplies.', 'Clothing support':'Thank you for asking about clothing support. A real coordinator would confirm accepted items, condition requirements and collection arrangements.', 'Donation enquiry':'Thank you for your donation enquiry. No payments are accepted by this student project; a real organisation would explain verified donation methods and provide an official receipt process.', 'Community partnership':'Thank you for proposing a partnership. A real coordinator would review the idea, intended community, roles, timing and safeguarding arrangements.', 'Other':'Thank you for sharing your idea. A real team would review the enquiry and confirm the appropriate next step.'};paragraph.textContent=responses[topic]||'Thank you for your interest. This is a fictional project, so actual costs, dates, availability or services cannot be confirmed.';}
        const pre=document.createElement('pre');pre.className='form-summary';pre.textContent=summary;
        const copy=document.createElement('button');copy.type='button';copy.className='button button-dark';copy.textContent='Copy enquiry summary';
        copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(summary);copy.textContent='Copied';}catch{const range=document.createRange();range.selectNodeContents(pre);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);copy.textContent='Select and copy the text';}});
        feedback.append(heading,paragraph,pre,copy);
        if(isContact){const mail=document.createElement('a');mail.className='button button-primary';mail.href=`mailto:hello@example.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary+'\n\nReply-to email supplied: '+email)}`;mail.textContent='Open email application';feedback.append(mail);}
        feedback.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
      }
    });
  });
});
