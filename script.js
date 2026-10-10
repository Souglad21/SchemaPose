"use strict";

const figureDialog = document.querySelector(".figure-dialog");
const dialogImage = document.querySelector(".dialog-image");
const dialogTitle = document.querySelector("#dialog-title");

document.querySelectorAll(".figure-image").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = `Figure ${button.dataset.figure}`;
    figureDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  figureDialog.close();
});
figureDialog.addEventListener("click", (event) => {
  if (event.target !== figureDialog) return;
  const bounds = figureDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    figureDialog.close();
  }
});

const videos = [...document.querySelectorAll("video")];
videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

if ("IntersectionObserver" in window) {
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
