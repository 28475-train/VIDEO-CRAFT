const GAS_URL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); const isActive = document.body.classList.contains('show-ruby'); const btns = document.querySelectorAll('.btn-toggle-ruby'); btns.forEach(btn => { btn.innerText = isActive ? "よみがな：ON" : "よみがな：OFF"; btn.classList.toggle('active', isActive); }); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { // 1. ナビゲーションの生成 const nav = document.querySelector('nav'); if (nav) { nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img" onerror="this.style.display='none'"> <span class="nav-title">KIZUNA video</span> </a> <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

// 2. ローディング解除の実行
// 画像の読み込みを待たずに、3秒経過したら強制的に表示させます
setTimeout(() => {
    document.body.classList.add('ready');
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }
}, 3000);
});
