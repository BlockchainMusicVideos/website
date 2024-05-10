import "./css/style.css";

function getVideoElement(): HTMLVideoElement | null {
  return document.querySelector("video");
}

function playVideo(video: HTMLVideoElement): void {
  video.play().catch((error) => {
    console.error("Failed to play video:", error);
    // Handle the error, e.g., display a user-friendly message
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const video = getVideoElement();
  if (video !== null) {
    playVideo(video);
  }
});
