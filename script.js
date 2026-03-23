function nextPage() {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  setNoInitialPosition();
  const music = document.getElementById('bgMusic');
  if (music) music.play().catch(() => {});
}

function setNoInitialPosition() {
  const btn = document.getElementById('no');
  btn.style.left = (window.innerWidth  / 2 + 80) + 'px';
  btn.style.top  = (window.innerHeight / 2 + 10) + 'px';
}

function moveNoButton() {
  const btn  = document.getElementById('no');
  const btnW = btn.offsetWidth  || 100;
  const btnH = btn.offsetHeight || 44;
  const pad  = 20;
  const x = Math.floor(Math.random() * (window.innerWidth  - btnW - pad * 2)) + pad;
  const y = Math.floor(Math.random() * (window.innerHeight - btnH - pad * 2)) + pad;
  btn.style.left = x + 'px';
  btn.style.top  = y + 'px';
}

document.getElementById('no').addEventListener('mouseover',  moveNoButton);
document.getElementById('no').addEventListener('touchstart', moveNoButton, { passive: true });

document.getElementById('yes').addEventListener('click', function () {
  document.getElementById('page2').classList.remove('active');
  document.getElementById('page3').classList.add('active');
  launchHearts();
});

function launchHearts() {
  const emojis = ['❤️', '💖', '💕', '💗', '💓'];
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.classList.add('heart');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left            = Math.random() * 100 + 'vw';
      el.style.fontSize        = (1 + Math.random() * 1.5) + 'rem';
      el.style.animationDuration = (4 + Math.random() * 4) + 's';
      el.style.animationDelay    = (Math.random() * 2) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }, i * 200);
  }
}