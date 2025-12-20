window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

function runDemo() {
    const id = document.getElementById('d-id').value;
    const pass = document.getElementById('d-pass').value;

    if(id === "demo001" && pass === "test1234") {
        document.getElementById('demo-login').style.display = 'none';
        document.getElementById('demo-content').style.display = 'block';
        setTimeout(() => {
            document.getElementById('d-bar').style.width = '70%';
            document.getElementById('d-msg').innerText = '現在のステータス：エフェクト調整中';
        }, 500);
    } else {
        alert("ID/PASSが違います");
    }
}

function applyFilter() {
    const bright = document.getElementById('bright').value;
    const saturate = document.getElementById('saturate').value;
    document.getElementById('demo-img').style.filter = `brightness(${bright}%) saturate(${saturate}%)`;
}
