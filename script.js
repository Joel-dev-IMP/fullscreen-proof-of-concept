var isFullScreen = false;

document.addEventListener("keydown", (e) => {
  // Parallel Fulscreen
  if (e.key == "f") {
      let el = document.getElementById("outer");
      if (isFullScreen) {
          document.exitFullscreen();
          isFullScreen = false;
          return;
        }
        el.requestFullscreen();
        isFullScreen = true;
    }
    
  // First Cell Fulscreen
  if (e.key == "g") {
      let el = document.getElementById("inner-1");
      if (isFullScreen) {
          document.exitFullscreen();
          isFullScreen = false;
          return;
        }
        el.requestFullscreen();
        isFullScreen = true;
    }
    
  // Second Cell Fulscreen
  if (e.key == "h") {
    let el = document.getElementById("inner-2");
    if (isFullScreen) {
      document.exitFullscreen();
      isFullScreen = false;
      return;
    }
    el.requestFullscreen();
    isFullScreen = true;
  }
});
