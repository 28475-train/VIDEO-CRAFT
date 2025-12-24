const GAS_URL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); const isActive = document.body.classList.contains('show-ruby'); const btns = document.querySelectorAll('.btn-toggle-ruby'); btns.forEach(btn => { btn.innerText = isActive ? "よみがな：ON" : "よみがな：OFF"; btn.classList.toggle('active', isActive); }); localStorage.setItem('ruby', isActive); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { const navHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img" alt="logo"> <span class="nav-title">KIZUNA video</span> </a> <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>;

const nav = document.querySelector('nav');
if (nav) nav.innerHTML = navHTML;

if (localStorage.getItem('ruby') === 'true') {
    toggleRuby();
}

setTimeout(() => {
    document.body.classList.add('ready');
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.opacity = '0';
        setTimeout(() => { if(loader) loader.style.display = 'none'; }, 1000);
    }, 3000);
}, 500);
});
