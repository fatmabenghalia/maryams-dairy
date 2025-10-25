const pages = document.querySelectorAll(".page");
let current = 0;
let startX = 0;

pages.forEach((page, i) => {
  // Make sure pages are stacked properly
  page.style.zIndex = pages.length - i;
});

document.querySelector(".book").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".book").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;

  // Swipe left → go forward
  if (endX < startX - 50 && current < pages.length - 1) {
    pages[current].style.transform = "rotateY(-180deg)";
    current++;
  }

  // Swipe right → go backward
  else if (endX > startX + 50 && current > 0) {
    current--;
    pages[current].style.transform = "rotateY(0deg)";
  }
});
