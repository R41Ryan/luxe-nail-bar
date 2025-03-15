document
  .querySelector(".left-scroll-btn")
  .addEventListener("click", () => scrollGallery(-1, 400));
document
  .querySelector(".right-scroll-btn")
  .addEventListener("click", () => scrollGallery(1, 400));

function scrollGallery(direction, amount) {
  document
    .querySelector(".gallery-container")
    .scrollBy({ left: direction * amount, behavior: "smooth" });
}
