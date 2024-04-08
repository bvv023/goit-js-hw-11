import{S as y,i as o}from"./assets/vendor-849b3be3.js";function m(a){const t="https://pixabay.com/api/",e=new URLSearchParams({key:"43225826-209ae09ba096a17ea4e8a3ec3",q:a,lang:"cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh, uk",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"99"}),l=`${t}?${e}`;return fetch(l).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{throw console.error(r),new Error("Failed to fetch images. Please try again.")})}const u=new y(".gallery-link",{captionsData:"alt"});function p(a){const t=document.querySelector(".gallery"),e=a.map(({webformatURL:l,largeImageURL:r,tags:i,likes:n,views:c,comments:g,downloads:h})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              src="${l}"
              data-source="${r}"
              alt="${i}"
            />
            <ul class="gallery-description">
              <li class="gallery-dscr_item"><h3>Likes</h3><p>${n}</p></li>
              <li class="gallery-dscr_item"><h3>Views</h3><p>${c}</p></li>
              <li class="gallery-dscr_item"><h3>Comments</h3><p>${g}</p></li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${h}</p></li>
            </ul>
          </a>
        </li>`).join("");t.innerHTML=e,u.refresh()}const d=document.querySelector(".form"),f=document.querySelector(".gallery"),s=document.querySelector(".loader");s.style.display="none";d.addEventListener("submit",async a=>{a.preventDefault(),f.innerHTML="";const t=a.target.elements.search.value.trim();if(t){s.style.display="flex";try{const e=await m(t);e.hits.length||o.error({message:"Sorry, there are no images matching your search query. Please, try again!",close:!0}),p(e.hits)}catch(e){console.error(e.message),o.error({message:"Failed to fetch images. Please try again.",close:!0})}finally{s.style.display="none"}}a.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
