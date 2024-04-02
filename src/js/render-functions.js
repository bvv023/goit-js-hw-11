import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;
    imageElement.classList.add('gallery-image');
    card.appendChild(imageElement);

    card.addEventListener('click', () => openModal(image));

    gallery.appendChild(card);
  });
}

function openModal(image) {
  const lightbox = new SimpleLightbox('.gallery-image');
  lightbox.open();
}

export function showLoadingIndicator() {
  iziToast.show({
    title: '',
    message: 'Loading images...',
    position: 'topCenter',
    progressBar: false,
    timeout: false,
    closeOnClick: false,
    displayMode: 'replace'
  });
}

export function hideLoadingIndicator() {
  iziToast.hide({}, document.querySelector('.iziToast'));
}

export function showErrorMessage() {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!'
  });
}
