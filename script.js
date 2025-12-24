const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { const nav = document.querySelector('nav'); if (nav) { nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img"> <span>KIZUNA video</span> </a> <button onclick="toggleRuby()" style="font-size:11px; padding:6px 12px; border-radius:12px; border:1px solid var(--accent); background:none; color:var(--accent); font-weight:bold; cursor:pointer;">よみがな</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

// LINEリンクをブラウザの新しいタブで直接開く（URL付着を防止）
const lineLinks = document.querySelectorAll('a[href*="lin.ee"]');
lineLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open("[https://lin.ee/K6TBvW6](https://lin.ee/K6TBvW6)", "_blank");
    });
});
});

async function checkAuth() { const pw = document.getElementById('pw').value; const btn = document.getElementById('authBtn'); if(!pw) return alert("パスワードを入力してください"); btn.innerText = "照合中..."; try { const res = await fetch(GASURL); const data = await res.json(); const match = data.find(i => i.password === pw); if (match) { document.getElementById('ui').style.display = 'none'; const dl = document.getElementById('dl'); dl.href = "https://drive.google.com/uc?export=download&id=" + match.file_id; dl.style.display = 'block'; } else { alert("パスワードが違います"); btn.innerText = "認証"; } } catch (e) { alert("エラーが発生しました"); } }

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("未入力があります"); const btn = document.getElementById('sendBtn'); btn.innerText = "送信中..."; try { await fetch(GASURL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("送信完了。LINEへ移動します。"); window.open("https://lin.ee/K6TBvW6", "_blank"); } catch (e) { window.open("https://lin.ee/K6TBvW6", "_blank"); } }
