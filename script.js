// 🎵 Music play (mobile fix)
const music = document.getElementById("bgMusic");

// har click pe try karega play
document.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
});

// Next page
function nextPage() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

// Buttons
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// YES click
yesBtn.addEventListener("click", () => {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.add("active");
  startHearts();
});

// 😈 ULTRA HARD NO BUTTON
let moveCount = 0;

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  moveCount++;

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // size reduce
  if (moveCount > 3) noBtn.style.transform = "scale(0.7)";
  if (moveCount > 6) noBtn.style.transform = "scale(0.5)";

  // text change
  if (moveCount === 2) noBtn.innerText = "Are you sure? 😳";
  if (moveCount === 4) noBtn.innerText = "Soch le 😏";
  if (moveCount === 6) noBtn.innerText = "Last chance 😭";
  if (moveCount > 8) noBtn.innerText = "Nahi bach paoge 😈";
}

// ❤️ Hearts (UPDATED PREMIUM)
function startHearts() {
  setInterval(() => {
    const el = document.createElement("div");

    // random heart type
    el.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

    el.classList.add("heart");

    // random horizontal position
    el.style.left = Math.random() * 100 + "vw";

    // random size
    el.style.fontSize = Math.random() * 20 + 10 + "px";

    // random rotation start
    el.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 6000);
  }, 200);
}