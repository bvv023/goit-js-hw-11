import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoadingIndicator, hideLoadingIndicator, showErrorMessage } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const searchInput = document.querySelector('#search-input');
  const query = searchInput.value.trim();

  if (!query) {
    return;
  }

  showLoadingIndicator();

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      showErrorMessage();
    } else {
      renderGallery(images);
    }
  } catch (error) {
    console.error('Error searching images:', error.message);
    showErrorMessage();
  } finally {
    hideLoadingIndicator();
  }
});
