const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

document.addEventListener('DOMContentLoaded', () => { // 2段メニューの自動生成 const nav = document.querySelector('nav'); if (nav) { nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img"> <span>KIZUNA video</span> </a> <button onclick="toggleRuby()" style="font-size:10px; padding:6px 14px; border-radius:14px; border:1px solid var(--accent); background:none; color:var(--accent); font-weight:900; cursor:pointer;">Ruby ON/OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

// LINEリンクの絶対パス強制化（不具合対策）
const lineBtns = document.querySelectorAll('.btn-line');
lineBtns.forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault();
        window.location.href = "[https://lin.ee/K6TBvW6](https://lin.ee/K6TBvW6)";
    };
});
});

// スプレッドシート連携（予約・認証） async function checkAuth() { const pw = document.getElementById('pw').value; const btn = document.getElementById('authBtn'); if(!pw) return alert("Please enter password"); btn.innerText = "Checking..."; try { const res = await fetch(GASURL); const data = await res.json(); const match = data.find(i => i.password === pw); if (match) { document.getElementById('ui').style.display = 'none'; const dl = document.getElementById('dl'); dl.href = "https://drive.google.com/uc?export=download&id=" + match.file_id; dl.style.display = 'block'; } else { alert("Error: Incorrect password"); btn.innerText = "Login"; } } catch (e) { alert("Network Error"); } }

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("Please fill all fields"); const btn = document.getElementById('sendBtn'); btn.innerText = "Sending..."; try { await fetch(GASURL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("Success! Opening LINE..."); window.location.href = "https://lin.ee/K6TBvW6"; } catch (e) { window.location.href = "https://lin.ee/K6TBvW6"; } }
