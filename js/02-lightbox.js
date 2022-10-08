import { galleryItems } from "./gallery-items.js";
// Change code below this line


let gallery = document.querySelector(".gallery");


gallery.insertAdjacentHTML('afterbegin',createItem(galleryItems));

function createItem(array) {return array.map(({preview,original,description}) => {
  return`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join("")};

const modalWindow = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

modalWindow.on('show.simplelightbox', function () {});


