/*
window.addEventListener("load", () => {
    addSpace()
  });
  window.addEventListener("resize", () => {
    addSpace()
  });
  function addSpace() {
    const container = document.getElementById("mainContainer")
    const windowWidth = window.innerWidth
    if (windowWidth < 576) {
        container.style.top = "0";
        container.style.left = "0";
        container.style.transform = "translate(0, 0)";
    } else if (windowWidth < 1200) {
        container.style.top = "0";
        container.style.left = "50%";
        container.style.transform = "translate(-50%, 0)";
    } else {
      container.style.top = "30%";
      container.style.left = "50%";
      container.style.transform = "translate(-50%, -30%)";
    }
  }