function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element'); }

function renderNav() { const top = document.getElementById('top-nav'); const bottom = document.getElementById('bottom-nav'); const path = window.location.pathname.split("/").pop() || 'index.html'; const menu = [ {n:'About', u:'about.html'}, {n:'Works', u:'works.html'}, {n:'Price', u:'price.html'}, {n:'Flow', u:'flow.html'}, {n:'Guide', u:'guide.html'}, {n:'Contact', u:'contact.html'} ]; const html = menu.map(m => <a href="${m.u}" class="nav-item ${path===m.u?'active':''}">${m.n}</a>).join('');

if(top) top.innerHTML = `<div class="nav-inner"><div class="nav-row-1"><a href="index.html" class="logo-link">KIZUNA VIDEO</a><button onclick="toggleRuby()" class="ruby-toggle">ふりがな</button></div><div class="nav-row-2">${html}</div></div>`;
if(bottom) bottom.innerHTML = `<div class="nav-inner" style="padding:10px;"><div class="nav-row-2" style="justify-content:center;">${html}</div></div>`;
} document.addEventListener('DOMContentLoaded', renderNav);
