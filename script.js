function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function createNavigation() { const topNav = document.getElementById('top-nav'); const bottomNav = document.getElementById('bottom-nav'); const currentPath = window.location.pathname.split("/").pop() || 'index.html';

const menuData = [
    { label: 'About', url: 'about.html' },
    { label: 'Works', url: 'works.html' },
    { label: 'Price', url: 'price.html' },
    { label: 'Flow', url: 'flow.html' },
    { label: 'Guide', url: 'guide.html' },
    { label: 'Contact', url: 'contact.html' },
    { label: 'Download', url: 'download.html' }
];

const menuContent = `
<div class="nav-inner">
    <div class="nav-row-1">
        <a href="index.html" class="site-logo">KIZUNA VIDEO</a>
        <button onclick="toggleRuby()" class="ruby-toggle-btn">ふりがな ON/OFF</button>
    </div>
    <div class="nav-row-2">
        ${menuData.map(m => `
            <a href="${m.url}" class="nav-item ${currentPath === m.url ? 'active' : ''}">${m.label}</a>
        `).join('')}
    </div>
</div>`;

if (topNav) topNav.innerHTML = menuContent;
if (bottomNav) {
    bottomNav.innerHTML = `
    <div class="nav-inner" style="padding: 10px;">
        <div class="nav-row-2" style="justify-content: center;">
            ${menuData.map(m => `
                <a href="${m.url}" class="nav-item ${currentPath === m.url ? 'active' : ''}" style="font-size:11px; padding:8px 12px;">${m.label}</a>
            `).join('')}
        </div>
    </div>`;
}
}

document.addEventListener('DOMContentLoaded', createNavigation);
