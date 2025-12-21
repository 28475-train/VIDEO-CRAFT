// よみがな切り替え機能
function toggleRuby() {
    document.body.classList.toggle('show-ruby');
    const isActive = document.body.classList.contains('show-ruby');
    const btns = document.querySelectorAll('.btn-toggle-ruby');
    btns.forEach(btn => {
        btn.innerText = isActive ? "よみがな：ON" : "よみがな：OFF";
        btn.classList.toggle('active', isActive);
    });
}

// Google翻訳の初期化
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'ja',
        includedLanguages: 'ja,en,zh-CN',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// 全ページ共通の2段メニューを自動生成
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
    <div class="nav-inner">
        <div class="nav-top">
            <a href="index.html" class="nav-logo">KIZUNA video</a>
            <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：OFF</button>
        </div>
        <div class="nav-bottom">
            <a href="about.html" class="nav-btn">ABOUT</a>
            <a href="works.html" class="nav-btn">WORKS</a>
            <a href="guide.html" class="nav-btn">GUIDE</a>
            <a href="reserve.html" class="nav-btn">RESERVE</a>
            <a href="download.html" class="nav-btn">DOWNLOAD</a>
        </div>
    </div>`;
    
    const navElement = document.querySelector('nav');
    if (navElement) navElement.innerHTML = navHTML;

    // ローディング解除
    setTimeout(() => {
        document.body.classList.add('ready');
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) loader.style.display = 'none';
        }, 1000);
    }, 3500);
});
