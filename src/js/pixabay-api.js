export function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const parameters = new URLSearchParams({
    key: '43225826-209ae09ba096a17ea4e8a3ec3',
    q: query,
    lang: 'cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh, uk',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: '99',
  });
  const url = `${BASE_URL}?${parameters}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw new Error('Failed to fetch images. Please try again.');
    });
}
