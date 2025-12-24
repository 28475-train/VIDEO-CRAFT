const GAS_URL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); const isActive = document.body.classList.contains('show-ruby'); const btns = document.querySelectorAll('.btn-toggle-ruby'); btns.forEach(btn => { btn.innerText = isActive ? "よみがな：ON" : "よみがな：OFF"; btn.classList.toggle('active', isActive); }); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { const navHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo">KIZUNA video</a> <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; const nav = document.querySelector('nav'); if (nav) nav.innerHTML = navHTML;

setTimeout(() => {
    document.body.classList.add('ready');
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }, 1000);
}, 3500);
});

async function checkAuth() { const inputPw = document.getElementById('pw').value; const btn = document.getElementById('authBtn'); if(!inputPw) return alert("パスワードを入力してください"); btn.innerText = "照合中..."; btn.disabled = true; try { const response = await fetch(GAS_URL); const data = await response.json(); const match = data.find(item => item.password === inputPw); if (match) { document.getElementById('ui').style.display = 'none'; const dl = document.getElementById('dl'); dl.href = "https://drive.google.com/uc?export=download&id=" + match.file_id; dl.style.display = 'block'; } else { alert("パスワードが正しくありません"); btn.innerText = "認証"; btn.disabled = false; } } catch (e) { alert("通信エラーが発生しました"); btn.innerText = "認証"; btn.disabled = false; } }

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("すべての項目を入力してください"); const btn = document.getElementById('sendBtn'); btn.innerText = "送信中..."; btn.disabled = true; try { await fetch(GAS_URL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("予約を記録しました。LINEへ移動します。"); location.href = "https://lin.ee/K6TBvW6"; } catch (e) { alert("送信に失敗しました。LINEへ直接ご連絡ください。"); btn.disabled = false; btn.innerText = "予約してLINEへ送る"; } }
