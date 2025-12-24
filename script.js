function toggleRuby() { document.body.classList.toggle('show-ruby'); }function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');}function sendLineOrder() {const type = document.getElementById('v-type').value;const date = document.getElementById('v-date').value;const pub = document.getElementById('v-public').value;const memo = document.getElementById('v-memo').value;const message = `【映像制作申し込み】
種類：${type}希望納期：${date}実績公開：${pub}備考：${memo}上記内容で無料で相談・申し込みをします。`;window.location.href = `https://line.me/R/oaMessage/@494zixmx/?${encodeURIComponent(message)}`;
}function renderNav() {const top = document.getElementById('top-nav');const bottom = document.getElementById('bottom-nav');const path = window.location.pathname.split("/").pop() || 'index.html';const menu = [
    {n:'About', u:'about.html'}, {n:'Works', u:'works.html'}, {n:'Price', u:'price.html'},
    {n:'Flow', u:'flow.html'}, {n:'Guide', u:'guide.html'}, {n:'Contact', u:'contact.html'}
];

const html = menu.map(m => `<a href="${m.u}" class="nav-item ${path===m.u?'active':''}">${m.n}</a>`).join('');

const content = `<div class="nav-inner">
    <div class="nav-row-1"><a href="index.html" class="logo-link">KIZUNA VIDEO</a><button onclick="toggleRuby()" class="ruby-toggle">ふりがな</button></div>
    <div class="nav-row-2">${html}</div>
</div>`;

if(top) top.innerHTML = content;
if(bottom) bottom.innerHTML = `<div class="nav-inner" style="padding:10px;"><div class="nav-row-2" style="justify-content:center;">${html}</div></div>`;
}document.addEventListener('DOMContentLoaded', renderNav);
