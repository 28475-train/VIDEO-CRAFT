const GASURL = "https://script.google.com/macros/s/AKfycbzFlhCuwaJenjoOJAKrLa-VLvAfDWpQyqwtQgmDte5is0MLdCpJ9NMWq_rvGC84nObX/exec";

function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', includedLanguages: 'ja,en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img"> <span>KIZUNA video</span> </a> <button onclick="toggleRuby()" class="ruby-btn">よみがな</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">About</a> <a href="works.html" class="nav-btn">Works</a> <a href="guide.html" class="nav-btn">Guide</a> <a href="reserve.html" class="nav-btn">Reserve</a> <a href="download.html" class="nav-btn">Download</a> </div> </div>; }

// 読み込み完了を待たずにメニューを即実行 renderMenu();

document.addEventListener('DOMContentLoaded', () => { renderMenu(); // 保険 });

window.addEventListener('load', () => { renderMenu(); // 最終保険 });

// LINEボタンの動作を固定 function openLine() { window.location.replace("https://lin.ee/K6TBvW6"); }
