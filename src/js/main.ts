const video = document.getElementById("video") as HTMLVideoElement | null;
const videoContainer = document.getElementById(
  "video-container"
) as HTMLDivElement | null;

if (video && videoContainer) {
  videoContainer.addEventListener("mouseenter", () => {
    video.play();
  });
  videoContainer.addEventListener("mouseleave", () => {
    video.pause();
  });
  videoContainer.addEventListener("touchend", () => {
    video.pause();
  });
  videoContainer.addEventListener("mousemove", () => {
    video.play();
  });
}

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
