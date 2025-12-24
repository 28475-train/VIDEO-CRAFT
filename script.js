function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderGlobalNav() { const top = document.getElementById('top-nav'); const bottom = document.getElementById('bottom-nav'); const current = window.location.pathname.split("/").pop() || 'index.html';

const menu = [
    { n: 'About', u: 'about.html' },
    { n: 'Works', u: 'works.html' },
    { n: 'Price', u: 'price.html' },
    { n: 'Flow', u: 'flow.html' },
    { n: 'Guide', u: 'guide.html' },
    { n: 'Contact', u: 'contact.html' },
    { n: 'Download', u: 'download.html' }
];

const html = menu.map(m => `
    <a href="${m.u}" class="nav-item ${current === m.u ? 'active' : ''}">${m.n}</a>
`).join('');

const topContent = `
<div class="nav-inner">
    <div class="nav-row-1">
        <a href="index.html" class="logo-link">KIZUNA VIDEO</a>
        <button onclick="toggleRuby()" class="ruby-toggle">ふりがな ON/OFF</button>
    </div>
    <div class="nav-row-2">${html}</div>
</div>`;

const bottomContent = `
<div class="nav-inner" style="padding:10px;">
    <div class="nav-row-2" style="justify-content:center;">${html}</div>
</div>`;

if (top) top.innerHTML = topContent;
if (bottom) bottom.innerHTML = bottomContent;
}

document.addEventListener('DOMContentLoaded', renderGlobalNav);
