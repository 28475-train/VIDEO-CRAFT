function toggleRuby() { document.body.classList.toggle('show-ruby'); }

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); }

function renderMenu() { const navs = document.querySelectorAll('nav'); navs.forEach(nav => { nav.innerHTML = <div class="nav-inner"> <div class="nav-row-1"> <a href="index.html" class="site-title">KIZUNA VIDEO</a> <button onclick="toggleRuby()" class="ruby-toggle">ふりがな ON/OFF</button> </div> <div class="nav-row-2"> <a href="about.html" class="nav-btn">About</a> <a href="works.html" class="nav-btn">Works</a> <a href="price.html" class="nav-btn">Price</a> <a href="flow.html" class="nav-btn">Flow</a> <a href="guide.html" class="nav-btn">Guide</a> <a href="contact.html" class="nav-btn">Contact</a> <a href="download.html" class="nav-btn">Download</a> </div> </div>; }); }

document.addEventListener('DOMContentLoaded', renderMenu);
