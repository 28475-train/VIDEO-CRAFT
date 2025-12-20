const gasUrl = "https://script.google.com/macros/s/AKfycbyk4UfoV3D4PD6-Rw0HN_OHD3RszUDsYCKK6g54c3kvP_2SyikX_Kjs1sYCcj4ZODm16w/exec";

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) { loader.style.opacity = '0'; setTimeout(() => loader.style.display = 'none', 800); }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

async function runLogin() {
    const id = document.getElementById('d-id').value;
    const pass = document.getElementById('d-pass').value;
    const btn = document.querySelector('#demo-login .btn-main');

    if (!id || !pass) return alert("IDとパスワードを入力してください");

    btn.innerText = "照合中...";
    btn.disabled = true;

    try {
        const response = await fetch(`${gasUrl}?id=${id}&pass=${pass}`);
        const result = await response.json();

        if (result.auth) {
            renderMemberPage(result);
        } else {
            alert("IDまたはパスワードが正しくありません");
            btn.innerText = "ログイン";
            btn.disabled = false;
        }
    } catch (e) {
        alert("通信エラー：スプレッドシートにアクセスできません");
        btn.innerText = "ログイン";
        btn.disabled = false;
    }
}

function renderMemberPage(data) {
    document.getElementById('demo-login').style.display = 'none';
    document.getElementById('demo-content').style.display = 'block';

    document.getElementById('user-name').innerText = data.name + " 様 専用ページ";
    document.getElementById('d-bar').style.width = data.progress + "%";
    document.getElementById('d-msg').innerText = "進捗ステータス：" + data.status;
    document.getElementById('d-delivery').innerText = "納品予定日：" + data.delivery;
    document.getElementById('d-message').innerText = data.message;
    
    if (data.url) {
        document.getElementById('d-download').innerHTML = `<a href="${data.url}" target="_blank" class="btn-main">動画をダウンロードする</a>`;
    } else {
        document.getElementById('d-download').innerText = "動画は現在、制作またはアップロード中です。";
    }
}

function applyFilter() {
    const bright = document.getElementById('bright').value;
    const saturate = document.getElementById('saturate').value;
    document.getElementById('demo-img').style.filter = `brightness(${bright}%) saturate(${saturate}%)`;
}
