function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-top"> <a href="index.html" class="logo-text">KIZUNA VIDEO</a> <button onclick="toggleRuby()" class="ruby-btn">ふりがな ON/OFF</button> </div> <div class="nav-bottom"> <a href="about.html" class="menu-item">About</a> <a href="works.html" class="menu-item">Works</a> <a href="price.html" class="menu-item">Price</a> <a href="flow.html" class="menu-item">Flow</a> <a href="guide.html" class="menu-item">Guide</a> <a href="contact.html" class="menu-item">Contact</a> <a href="download.html" class="menu-item">Download</a> </div> </div>; }

document.addEventListener('DOMContentLoaded', renderMenu);
