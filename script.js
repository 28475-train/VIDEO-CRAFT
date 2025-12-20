/* --- 設定エリア --- */
const gasUrl = "https://script.google.com/macros/s/AKfycbyk4UfoV3D4PD6-Rw0HN_OHD3RszUDsYCKK6g54c3kvP_2SyikX_Kjs1sYCcj4ZODm16w/exec";

/* --- 1. オープニング & 順次表示アニメーション --- */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // 演出のために1.8秒後にフェードアウト
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loaded');
        }
        
        // ページ内の要素を監視して表示
        initRevealObserver();
    }, 1800);
});

function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 時間差をつけて表示
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* --- 2. ログイン処理 (login.html用) --- */
async function runLogin() {
    const id = document.getElementById('d-id');
    const pass = document.getElementById('d-pass');
    const btn = document.querySelector('.btn-black');

    if (!id.value || !pass.value) {
        alert("情報を入力してください");
        return;
    }

    btn.innerText = "Authenticating...";
    btn.disabled = true;

    try {
        const response = await fetch(`${gasUrl}?id=${id.value}&pass=${pass.value}`);
        const result = await response.json();

        if (result.auth) {
            showMemberPage(result);
        } else {
            alert("IDまたはパスワードが正しくありません");
            btn.innerText = "ログインして進捗を見る";
            btn.disabled = false;
        }
    } catch (e) {
        alert("サーバーエラーが発生しました");
        btn.disabled = false;
    }
}

/* --- 3. ログイン成功後の表示 & タイピング演出 --- */
function showMemberPage(data) {
    const loginForm = document.getElementById('login-form-area');
    const memberArea = document.getElementById('member-area');

    if (!loginForm || !memberArea) return;

    // フォームを消してマイページを出す
    loginForm.style.display = 'none';
    memberArea.style.display = 'block';

    // ユーザー名とステータスを即時反映
    document.getElementById('user-name').innerText = data.name + " 様";
    document.getElementById('d-msg').innerText = "Status: " + data.status;
    document.getElementById('d-delivery').innerText = "Estimated: " + data.delivery;
    
    // 進捗バーを動かす
    setTimeout(() => {
        document.getElementById('d-bar').style.width = data.progress + "%";
    }, 500);

    // メッセージのタイピング演出
    const messageEl = document.getElementById('d-message');
    typeWriter(data.message, messageEl);

    // ダウンロードボタン
    if (data.url) {
        const downloadDiv = document.getElementById('d-download');
        downloadDiv.innerHTML = `<a href="${data.url}" target="_blank" class="line-link" style="background:#000;">動画をダウンロード</a>`;
    }
}

// タイピングエフェクト関数
function typeWriter(text, element) {
    let i = 0;
    element.innerHTML = ""; // 初期化
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50); // 50ms間隔で一文字ずつ
        }
    }
    type();
}
