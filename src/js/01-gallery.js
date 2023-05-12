// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);




const gallery = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <li class="gallery__item">
            <a
              class="gallery__link"
              href="${original}"
            >
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
          </li>
        `;
    })
    .join('');
}

// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();
//   const { nodeName, dataset, href } = event.target;
//   if (nodeName !== 'IMG') {
//     return;
//   }
//   const instance = new SimpleLightbox.create(`
//     <img src="${dataset.source}" width="${dataset.width}" height="${dataset.height}">
//   `);
//   instance.show(() => document.addEventListener('keydown', onEscKeyPress));
//   // Додаємо обробник подій на клавішу Escape
//   document.addEventListener('keydown', onEscKeyPress);
//   function onEscKeyPress(event) {
//     if (event.code === 'Escape') {
//       instance.close(() =>
//         document.removeEventListener('keydown', onEscKeyPress)
//       );
//       // Видаляємо обробник подій, коли модальне вікно закрито
//       document.removeEventListener('keydown', onEscKeyPress);
//     }
//   }
// }
