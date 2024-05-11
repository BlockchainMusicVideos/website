import { detectAutoplay } from "detect-autoplay";
const video = document.querySelector("video");

let is_muted = true;

detectAutoplay().then((canAutoplay) => {
  if (canAutoplay) {
    // current website allows autoplay with sound
  } else {
    // current website does not allow autoplay with sound

    // video can only be muted to autoplay
    video.muted = true;

    // show a button to unmute
    const btn = document.createElement("button");
    btn.textContent = "Sound";
    btn.classList.add("unmute-btn");
    btn.onclick = () => {
      video.muted = !is_muted;
      is_muted = !is_muted;
    };
    document.body.appendChild(btn);
  }

  video.autoplay = true;
  video.play();
});

// serviceWorker.ts
const registerWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service worker registration succeeded:", registration);
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerWorker();
