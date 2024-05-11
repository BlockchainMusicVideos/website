const video = document.querySelector("video").play();
const playButton = document.querySelector(".play-button") as HTMLButtonElement;

if (video !== undefined) {
  video
    .then((_) => {
      // Autoplay started!
    })
    .catch((error) => {
      console.error("Autoplay was prevented", error);
    });
}

window.addEventListener("load", () => {
  playButton?.addEventListener("click", () => {
    video
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {
        console.error("Autoplay was prevented", error);
      });
  });

  setTimeout(() => {
    playButton?.click();
  }, 100);
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
