function toggleRuby() { document.body.classList.toggle('show-ruby'); }function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');}function sendLineOrder() {const type = document.getElementById('v-type').value;const date = document.getElementById('v-date').value;const pub = document.getElementById('v-public').value;const memo = document.getElementById('v-memo').value;const message = `【映像制作申し込み】
種類：${type}希望納期：${date}実績公開：${pub}備考：${memo}利用規約に同意の上、相談・申し込みをします。`;window.location.href = `https://line.me/R/oaMessage/@494zixmx/?${encodeURIComponent(message)}`;
}function renderNav() {const top = document.getElementById('top-nav');const bottom = document.getElementById('bottom-nav');const path = window.location.pathname.split("/").pop() || 'index.html';const menu = [
    {n:'About', u:'about.html'},
    {n:'Works', u:'works.html'},
    {n:'Price', u:'price.html'},
    {n:'Flow', u:'flow.html'},
    {n:'Guide', u:'guide.html'},
    {n:'Download', u:'download.html'},
    {n:'Policy', u:'policy.html'},
    {n:'Contact', u:'contact.html'}
];

const links = menu.map(m => `<a href="${m.u}" class="nav-item ${path===m.u?'active':''}">${m.n}</a>`).join('');

const topHtml = `<div class="nav-inner"><div class="nav-row-1"><a href="index.html" class="logo-link">KIZUNA VIDEO</a><button onclick="toggleRuby()" class="ruby-toggle">ふりがな</button></div><div class="nav-row-2">${links}</div></div>`;
const bottomHtml = `<div class="nav-inner" style="padding:10px;"><div class="nav-row-2" style="justify-content:center;">${links}</div></div>`;

if(top) top.innerHTML = topHtml;
if(bottom) bottom.innerHTML = bottomHtml;
}document.addEventListener('DOMContentLoaded', renderNav);
