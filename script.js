function toggleRuby() { const isShow = document.body.classList.toggle('show-ruby'); localStorage.setItem('ruby-pref', isShow); }

function loadRubyPref() { if (localStorage.getItem('ruby-pref') === 'true') { document.body.classList.add('show-ruby'); } }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element'); }

function initNavigation() { const nav = document.querySelector('nav'); if (!nav) return;

const menuItems = [
    { label: 'About', url: 'about.html' },
    { label: 'Works', url: 'works.html' },
    { label: 'Price', url: 'price.html' },
    { label: 'Flow', url: 'flow.html' },
    { label: 'Guide', url: 'guide.html' },
    { label: 'Contact', url: 'contact.html' },
    { label: 'Download', url: 'download.html' }
];

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

const menuHtml = menuItems.map(item => {
    const activeClass = item.url === currentPath ? 'style="background:var(--accent); color:#fff;"' : '';
    return `<a href="${item.url}" class="nav-item" ${activeClass}>${item.label}</a>`;
}).join('');

nav.innerHTML = `
<div class="nav-inner">
    <div class="nav-top">
        <a href="index.html" class="nav-title">KIZUNA VIDEO</a>
        <button onclick="toggleRuby()" class="ruby-toggle-btn">ふりがな ON/OFF</button>
    </div>
    <div class="nav-bottom">
        ${menuHtml}
    </div>
</div>`;
}

function setupScrollAnimation() { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.1 });

document.querySelectorAll('.card, h1, .hero-sub').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});
}

document.addEventListener('DOMContentLoaded', () => { initNavigation(); loadRubyPref(); setupScrollAnimation(); });
