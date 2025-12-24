function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderNav() { const top = document.getElementById('top-nav'); const bottom = document.getElementById('bottom-nav'); const current = window.location.pathname.split("/").pop() || 'index.html';

const items = [
    { name: 'About', url: 'about.html' },
    { name: 'Works', url: 'works.html' },
    { name: 'Price', url: 'price.html' },
    { name: 'Flow', url: 'flow.html' },
    { name: 'Guide', url: 'guide.html' },
    { name: 'Contact', url: 'contact.html' },
    { name: 'Download', url: 'download.html' }
];

const menuHtml = items.map(i => `
    <a href="${i.url}" class="nav-item ${current === i.url ? 'active' : ''}">${i.name}</a>
`).join('');

if (top) {
    top.innerHTML = `
    <div class="nav-inner">
        <div class="nav-row-1">
            <a href="index.html" class="logo">KIZUNA VIDEO</a>
            <button onclick="toggleRuby()" class="ruby-btn">ふりがな ON/OFF</button>
        </div>
        <div class="nav-row-2">${menuHtml}</div>
    </div>`;
}

if (bottom) {
    bottom.innerHTML = `
    <div class="nav-inner">
        <div class="nav-row-2" style="justify-content: center;">${menuHtml}</div>
    </div>`;
}
}

document.addEventListener('DOMContentLoaded', renderNav);
