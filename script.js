// Alfred Steven Bundy does not age.
// His copyright notice unfortunately does.

document.getElementById("year").textContent =
  new Date().getFullYear();


// Tiny velvet-rope entrance effect

const photo = document.querySelector(".photo-frame");

photo.addEventListener("mouseenter", () => {
  photo.style.transform = "scale(1.015)";
  photo.style.transition = "0.3s ease";
});

photo.addEventListener("mouseleave", () => {
  photo.style.transform = "scale(1)";
});
