function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const nav = document.querySelector('nav'); if (!nav) return; nav.innerHTML = <div class="nav-inner"> <div class="nav-row-1"> <a href="index.html" class="site-title">KIZUNA VIDEO</a> <button onclick="toggleRuby()" class="ruby-toggle">ふりがな ON/OFF</button> </div> <div class="nav-row-2"> <a href="about.html" class="nav-link">About</a> <a href="works.html" class="nav-link">Works</a> <a href="price.html" class="nav-link">Price</a> <a href="flow.html" class="nav-link">Flow</a> <a href="guide.html" class="nav-link">Guide</a> <a href="contact.html" class="nav-link">Contact</a> <a href="download.html" class="nav-link">Download</a> </div> </div>; }

document.addEventListener('DOMContentLoaded', renderMenu);
