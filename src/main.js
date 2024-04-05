import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.form');
export const galleryImages = document.querySelector('.gallery');
const loadMove = document.querySelector('.loader');
loadMove.style.display = 'none';

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  galleryImages.innerHTML = '';
  const query = event.target.elements.search.value.trim();

  if (query) {
    loadMove.style.display = 'flex';

    getImage(query)
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please, try again!',
            close: true,
          });
        }
        renderImages(data.hits);
        loadMove.style.display = 'none';
      })
      .catch(error => {
        console.log(error);
        loadMove.style.display = 'none';
      });
  }
  event.target.reset();
});
