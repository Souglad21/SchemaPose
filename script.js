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
