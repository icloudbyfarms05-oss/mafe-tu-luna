const enter = document.getElementById("enterBtn");
const hero = document.getElementById("hero");
const story = document.getElementById("story");

function createAnimationLayer() {
  let layer = document.querySelector(".animation-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "animation-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
  }
  return layer;
}

function launchConfetti(layer) {
  const pieces = 90;
  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 260}px`);
    piece.style.animationDelay = `${Math.random() * 0.65}s`;
    piece.style.animationDuration = `${2.6 + Math.random() * 1.6}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 4800);
  }
}

function launchBalloons(layer) {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const balloon = document.createElement("span");
    balloon.className = "balloon";
    balloon.style.left = `${5 + Math.random() * 90}%`;
    balloon.style.animationDelay = `${Math.random() * 1.8}s`;
    balloon.style.animationDuration = `${6 + Math.random() * 3}s`;
    balloon.style.background = [
      "rgba(214,198,154,.72)",
      "rgba(196,176,210,.68)",
      "rgba(226,201,205,.70)",
      "rgba(180,196,218,.66)"
    ][i % 4];
    layer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 11000);
  }
}

function launchHearts(layer) {
  const count = 12;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = i % 3 === 0 ? "♡" : "♥";
    heart.style.left = `${5 + Math.random() * 90}%`;
    heart.style.setProperty("--heart-drift", `${(Math.random() - 0.5) * 100}px`);
    heart.style.animationDelay = `${Math.random() * 2.5}s`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 8500);
  }
}

function launchShootingStars(layer) {
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.className = "shooting-star";
    star.style.top = `${8 + Math.random() * 55}%`;
    star.style.left = `${5 + Math.random() * 65}%`;
    star.style.animationDelay = `${0.15 + i * 0.7}s`;
    layer.appendChild(star);
    setTimeout(() => star.remove(), 3400 + i * 700);
  }
}

enter.addEventListener("click", () => {
  enter.disabled = true;

  const layer = createAnimationLayer();

  // Pequeña celebración al tocar "Entra aquí".
  launchConfetti(layer);
  launchBalloons(layer);
  launchHearts(layer);
  launchShootingStars(layer);

  const moon = document.querySelector(".hero-moon");
  if (moon) moon.classList.add("moon-glow");

  hero.style.transition = "opacity 1.1s ease, transform 1.1s ease";
  hero.style.opacity = "0";
  hero.style.transform = "scale(.985) translateY(-12px)";

  setTimeout(() => {
    hero.style.display = "none";
    story.classList.remove("is-hidden");
    story.classList.add("reveal");

    const card = story.querySelector(".letter-card");
    if (card) card.classList.add("romantic-entry");

    window.scrollTo(0, 0);
  }, 850);
});

