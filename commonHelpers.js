import{S as d,i as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"43225826-209ae09ba096a17ea4e8a3ec3",q:o,lang:"cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh, uk",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"99"}),l=`${t}?${s}`;return fetch(l).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const m=new d(".gallery-link",{captionsData:"alt"});function y(o){const t=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:i,comments:c,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            src="${s}"
            data-source="${l}"
            alt="${e}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${r}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${i}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${c}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${u}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");n.insertAdjacentHTML("beforeend",t),m.refresh()}const h=document.querySelector(".form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";h.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const t=o.target.elements.search.value.trim();t&&(a.style.display="flex",f(t).then(s=>{s.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please, try again!",close:!0}),y(s.hits),a.style.display="none"}).catch(s=>{console.log(s),a.style.display="none"})),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
