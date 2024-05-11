const video = document.getElementById("video") as HTMLVideoElement | null;
const videoContainer = document.getElementById(
  "video-container"
) as HTMLDivElement | null;
const playButton = document.getElementById("play") as HTMLButtonElement | null;

// Autoplay video on page load
if (video && videoContainer && playButton) {
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise
      .catch((error) => {
        // Handle the case where the video cannot be automatically played
        // due to autoplay restrictions in the browser
        console.error("Autoplay was prevented. Error:", error);

        // Show a UI element (e.g., a play button) to allow the user to manually start playback
        playButton.style.display = "block";
        playButton.addEventListener("click", () => {
          video.play();
        });
      })
      .then(() => {
        // Autoplay started successfully
        console.log("Autoplay started");
      });
  }
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
