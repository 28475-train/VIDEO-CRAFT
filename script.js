function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="nav-logo-area"> <img src="logo.jpg" class="nav-logo-img"> <span>KIZUNA video</span> </a> <button onclick="toggleRuby()" style="font-size:11px; padding:6px 12px; border-radius:12px; border:1px solid var(--accent); background:white; color:var(--accent); font-weight:700; cursor:pointer;">ふりがな ON/OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="nav-btn">About</a> <a href="works.html" class="nav-btn">Works</a> <a href="price.html" class="nav-btn">Price</a> <a href="flow.html" class="nav-btn">Flow</a> <a href="contact.html" class="nav-btn">Contact</a> <a href="download.html" class="nav-btn">Download</a> </div> </div>; }

document.addEventListener('DOMContentLoaded', renderMenu);
