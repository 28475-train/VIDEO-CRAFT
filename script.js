const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); const isActive = document.body.classList.contains('show-ruby'); const btns = document.querySelectorAll('.btn-toggle-ruby'); btns.forEach(btn => { btn.innerText = isActive ? "よみがな：ON" : "よみがな：OFF"; btn.classList.toggle('active', isActive); }); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function buildNavigation() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img" alt="KIZUNA"> <span class="nav-title">KIZUNA video</span> </a> <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

document.addEventListener('DOMContentLoaded', () => { buildNavigation();

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('ready');
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }, 3000);
});
});

async function checkAuth() { const inputPw = document.getElementById('pw').value; const btn = document.getElementById('authBtn'); if(!inputPw) return alert("パスワードを入力してください"); btn.innerText = "照合中..."; btn.disabled = true; try { const response = await fetch(GASURL); const data = await response.json(); const match = data.find(item => item.password === inputPw); if (match) { document.getElementById('ui').style.display = 'none'; const dl = document.getElementById('dl'); dl.href = "https://drive.google.com/uc?export=download&id=" + match.file_id; dl.style.display = 'block'; } else { alert("パスワードが違います"); btn.innerText = "認証"; btn.disabled = false; } } catch (e) { alert("接続エラー"); btn.innerText = "認証"; btn.disabled = false; } }

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("全て入力してください"); const btn = document.getElementById('sendBtn'); btn.innerText = "送信中..."; btn.disabled = true; try { await fetch(GASURL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("予約を完了しました。LINEへ移動します。"); location.href = "https://lin.ee/K6TBvW6"; } catch (e) { alert("送信失敗。LINEで直接教えてください。"); btn.disabled = false; } }
