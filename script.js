const enter = document.getElementById("enterBtn");
const hero = document.getElementById("hero");
const story = document.getElementById("story");

enter.addEventListener("click", () => {
  enter.disabled = true;
  hero.style.transition = "opacity 1.1s ease, transform 1.1s ease";
  hero.style.opacity = "0";
  hero.style.transform = "scale(.985) translateY(-12px)";
  setTimeout(() => {
    hero.style.display = "none";
    story.classList.remove("is-hidden");
    story.classList.add("reveal");
    window.scrollTo(0, 0);
  }, 850);
});
