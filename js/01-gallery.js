import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let modalWindow;


gallery.insertAdjacentHTML("afterbegin", createItem(galleryItems));
gallery.addEventListener('click', onImgClick);


function createItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

function onKeyDown(e) { 
  if (e.code ==='Escape') {
     modalWindow.close() 
  } 
}

function onImgClick(event) {
  event.preventDefault();

  modalWindow = basicLightbox.create(`
    <div class="modal">
        <img src = "${event.target.dataset.source}">
    </div>`);

  modalWindow.show();

  const modalContainer = document.querySelector('.modal');

  modalContainer.addEventListener('click', () => { modalWindow.close() });

  if (modalWindow) {
    document.addEventListener('keydown', onKeyDown);
  } else {
    document.removeEventListener('keydown',onKeyDown)
  }
}


