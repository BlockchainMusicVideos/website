import { detectAutoplay } from "detect-autoplay";
const video = document.querySelector("video") as HTMLVideoElement;

detectAutoplay().then((canAutoplay) => {
  if (canAutoplay) {
    // current website allows autoplay with sound
  } else {
    // current website does not allow autoplay with sound

    // video can only be muted to autoplay
    video.muted = true;

    // show a button to unmute
    const btn = document.createElement("button");
    btn.textContent = "unmute";
    btn.onclick = () => (video.muted = false);
    document.body.appendChild(btn);
  }

  video.autoplay = true;
  video.play();
});

// serviceWorker.ts
// const registerServiceWorker = async () => {
//   if ("serviceWorker" in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register("/sw.js", {
//         scope: "/",
//       });
//       if (registration.installing) {
//         console.log("Service worker installing");
//       } else if (registration.waiting) {
//         console.log("Service worker installed");
//       } else if (registration.active) {
//         console.log("Service worker active");
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

// registerServiceWorker();
