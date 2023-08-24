// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const images = document.querySelectorAll(".lightbox-image");
const lightbox = new SimpleLightbox(".lightbox-image");

images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.open();
    });
  });