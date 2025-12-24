const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function buildNav() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img" onerror="this.style.display='none'"> <span class="nav-title">KIZUNA video</span> </a> <button class="btn-toggle-ruby" onclick="toggleRuby()">よみがな：切替</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">ABOUT</a> <a href="works.html" class="nav-btn">WORKS</a> <a href="guide.html" class="nav-btn">GUIDE</a> <a href="reserve.html" class="nav-btn">RESERVE</a> <a href="download.html" class="nav-btn">DOWNLOAD</a> </div> </div>; }

function unlock() { if (document.body.classList.contains('ready')) return; document.body.classList.add('ready'); const loader = document.getElementById('loader'); if (loader) { loader.style.opacity = '0'; setTimeout(function() { loader.style.display = 'none'; }, 1000); } }

// ページが読み込まれたらすぐに実行 document.addEventListener('DOMContentLoaded', function() { buildNav(); // どんなに遅くても2.5秒後には必ず表示を開始する setTimeout(unlock, 2500); });

// バックアップ：すべての読み込みが終わったときにも実行 window.addEventListener('load', unlock);

async function checkAuth() { const pw = document.getElementById('pw').value; const btn = document.getElementById('authBtn'); if(!pw) return alert("パスワードを入力してください"); btn.innerText = "照合中..."; try { const res = await fetch(GASURL); const data = await res.json(); const match = data.find(i => i.password === pw); if (match) { document.getElementById('ui').style.display = 'none'; const dl = document.getElementById('dl'); dl.href = "https://drive.google.com/uc?export=download&id=" + match.file_id; dl.style.display = 'block'; } else { alert("パスワードが違います"); btn.innerText = "認証"; } } catch (e) { alert("エラーが発生しました"); btn.innerText = "認証"; } }

async function sendToSheet() { const g = document.getElementById('genre').value; const n = document.getElementById('name').value; const d = document.getElementById('date').value; if(!g || !n || !d) return alert("入力してください"); const btn = document.getElementById('sendBtn'); btn.innerText = "送信中..."; try { await fetch(GASURL, { method: 'POST', body: JSON.stringify({ genre: g, name: n, date: d }) }); alert("予約を記録しました"); location.href = "https://lin.ee/K6TBvW6"; } catch (e) { alert("LINEへ移動します"); location.href = "https://lin.ee/K6TBvW6"; } }
