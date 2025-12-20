// --- 設定エリア ---
// あなたのGASデプロイURLをここに貼り付けてください
const gasUrl = "https://script.google.com/macros/s/AKfycbyk4UfoV3D4PD6-Rw0HN_OHD3RszUDsYCKK6g54c3kvP_2SyikX_Kjs1sYCcj4ZODm16w/exec";

// --- 1. ページ読み込み時の共通処理 ---
window.addEventListener('load', () => {
    // ローディング画面を消す
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }

    // スクロール時にふわっと出すアニメーション（revealクラス用）
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// --- 2. ログイン・進捗確認システム（login.html用） ---
async function runLogin() {
    const id = document.getElementById('d-id').value;
    const pass = document.getElementById('d-pass').value;
    const loginBtn = document.querySelector('.btn-main');

    if (!id || !pass) {
        alert("IDとパスワードを正しく入力してください。");
        return;
    }

    // ログインボタンを無効化（連打防止）
    loginBtn.innerText = "認証中...";
    loginBtn.disabled = true;

    try {
        // GASへデータをリクエスト
        const response = await fetch(`${gasUrl}?id=${id}&pass=${pass}`);
        const result = await response.json();

        if (result.auth) {
            // ログイン成功：マイページ表示関数を呼ぶ
            showMemberPage(result);
        } else {
            alert("IDまたはパスワードが間違っています。");
            loginBtn.innerText = "ログインして進捗を見る";
            loginBtn.disabled = false;
        }
    } catch (error) {
        console.error("通信エラー:", error);
        alert("サーバーと通信できませんでした。時間をおいて再度お試しください。");
        loginBtn.innerText = "ログインして進捗を見る";
        loginBtn.disabled = false;
    }
}

// ログイン成功後の表示切り替え
function showMemberPage(data) {
    const loginForm = document.getElementById('login-form-area');
    const memberArea = document.getElementById('member-area');

    if (loginForm && memberArea) {
        loginForm.style.display = 'none';
        memberArea.style.display = 'block';

        // 取得したデータを反映
        document.getElementById('user-name').innerText = data.name + " 様";
        document.getElementById('d-bar').style.width = data.progress + "%";
        document.getElementById('d-msg').innerText = "進捗状況：" + data.status;
        document.getElementById('d-delivery').innerText = "納品予定日：" + data.delivery;
        document.getElementById('d-message').innerText = data.message;

        // 納品URLがある場合のみボタンを表示
        const downloadDiv = document.getElementById('d-download');
        if (data.url) {
            downloadDiv.innerHTML = `<a href="${data.url}" target="_blank" class="btn-main" style="display:inline-block; text-decoration:none;">完成動画を確認・保存する</a>`;
        } else {
            downloadDiv.innerText = "動画データは現在準備中です。";
        }
    }
}

// --- 3. デモ体験機能（demo.html用） ---
function applyFilter() {
    const brightness = document.getElementById('bright').value;
    const img = document.getElementById('demo-img');
    if (img) {
        img.style.filter = `brightness(${brightness}%)`;
    }
}

// --- 4. セキュリティ・ログアウト処理 ---
function logout() {
    if (confirm("ログアウトしますか？")) {
        location.reload(); // 簡易的なログアウトとしてリロード
    }
}
