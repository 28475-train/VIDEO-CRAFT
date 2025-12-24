function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenus() { const topNav = document.getElementById('top-nav'); const bottomNav = document.getElementById('bottom-nav');

const menuItems = [
    { name: 'About', url: 'about.html' },
    { name: 'Works', url: 'works.html' },
    { name: 'Price', url: 'price.html' },
    { name: 'Flow', url: 'flow.html' },
    { name: 'Guide', url: 'guide.html' },
    { name: 'Contact', url: 'contact.html' },
    { name: 'Download', url: 'download.html' }
];

const currentPage = window.location.pathname.split("/").pop() || 'index.html';

const menuContent = `
<div class="nav-inner">
    <div class="nav-row-1">
        <a href="index.html" class="site-title">KIZUNA VIDEO</a>
        <button onclick="toggleRuby()" class="ruby-toggle">ふりがな ON/OFF</button>
    </div>
    <div class="nav-row-2">
        ${menuItems.map(item => `
            <a href="${item.url}" class="nav-item ${currentPage === item.url ? 'active' : ''}">${item.name}</a>
        `).join('')}
    </div>
</div>`;

if (topNav) topNav.innerHTML = menuContent;
if (bottomNav) bottomNav.innerHTML = `
<div class="nav-inner" style="padding: 15px;">
    <div class="nav-row-2" style="justify-content: center;">
        ${menuItems.map(item => `
            <a href="${item.url}" class="nav-item ${currentPage === item.url ? 'active' : ''}" style="font-size: 11px; padding: 8px 12px;">${item.name}</a>
        `).join('')}
    </div>
</div>`;
}

document.addEventListener('DOMContentLoaded', renderMenus);
