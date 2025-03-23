document
  .querySelector("#gallery .left-scroll-btn")
  .addEventListener("click", () => scrollGallery(-1, 400));
document
  .querySelector("#gallery .right-scroll-btn")
  .addEventListener("click", () => scrollGallery(1, 400));

document
  .querySelector("#testimonials .left-scroll-btn")
  .addEventListener("click", () => scrollTestimonials(-1, 400));
document
  .querySelector("#testimonials .right-scroll-btn")
  .addEventListener("click", () => scrollTestimonials(1, 400));

function scrollGallery(direction, amount) {
  document
    .querySelector("#gallery .gallery-container")
    .scrollBy({ left: direction * amount, behavior: "smooth" });
}

function scrollTestimonials(direction, amount) {
  document
    .querySelector("#testimonials .gallery-container")
    .scrollBy({ left: direction * amount, behavior: "smooth" });
}