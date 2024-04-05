import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


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
            id: null,
            class: 'custom-izitoast',
            message: 'Sorry, there are no images matching your search query. Please, try again!',
            messageColor: 'white',
            messageSize: '16px',
            messageLineHeight: '24px',
            maxWidthMessage: '332px',
            backgroundColor: '#EF4040',
            theme: 'light',
            color: 'red',
            iconUrl: '../img/bi_x-octagon.svg',
            position: 'topRight',
            timeout: 5000,
            close: false,
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
