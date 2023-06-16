function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key=${e.code}]`);
  const key = this.document.querySelector(`.key[data-key=${e.code}]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
