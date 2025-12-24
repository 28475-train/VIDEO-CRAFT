function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="site-title">KIZUNA VIDEO</a> <button onclick="toggleRuby()" class="ruby-toggle-btn">ふりがな 表示/非表示</button> </div> <div class="nav-links"> <a href="about.html" class="nav-item">About</a> <a href="works.html" class="nav-item">Works</a> <a href="price.html" class="nav-item">Price</a> <a href="flow.html" class="nav-item">Flow</a> <a href="guide.html" class="nav-item">Guide</a> <a href="contact.html" class="nav-item">Contact</a> <a href="download.html" class="nav-item">Download</a> </div> </div>; }

document.addEventListener('DOMContentLoaded', renderMenu);
