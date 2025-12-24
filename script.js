const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { // 全ページのnavタグを探してメニューを流し込む const nav = document.querySelector('nav'); if (nav) { nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img" alt="KIZUNA"> <span>KIZUNA video</span> </a> <button onclick="toggleRuby()" class="ruby-btn">よみがな</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

// LINEリンクの不具合修正：絶対パスで開く
const lineLinks = document.querySelectorAll('a[href*="lin.ee"]');
lineLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "[https://lin.ee/K6TBvW6](https://lin.ee/K6TBvW6)";
    });
});
});

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("未入力があります"); const btn = document.getElementById('sendBtn'); btn.innerText = "送信中..."; try { await fetch(GASURL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("送信完了しました。LINEへ移動します。"); window.location.href = "https://lin.ee/K6TBvW6"; } catch (e) { window.location.href = "https://lin.ee/K6TBvW6"; } }
