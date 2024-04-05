import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43225826-209ae09ba096a17ea4e8a3ec3",q:o,lang:"cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh, uk",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"99"}),i=`${r}?${s}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const p=new d(".gallery-link",{captionsData:"alt"});function h(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:c,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            src="${s}"
            data-source="${i}"
            alt="${e}"
          />
          <ul class="gallery-description">
          <li class="gallery-dscr_item"><h3>Likes</h3><p>${t}</p>
          </li>
          <li class="gallery-dscr_item"><h3>Views</h3><p>${l}</p>
            </li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${c}</p>
              </li>
              <li class="gallery-dscr_item"><h3>Downloads</h3><p>${u}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),p.refresh()}const f=document.querySelector(".form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";f.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const r=o.target.elements.search.value.trim();r&&(a.style.display="flex",g(r).then(s=>{s.hits.length||m.error({id:null,class:"custom-izitoast",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",messageSize:"16px",messageLineHeight:"24px",maxWidthMessage:"332px",backgroundColor:"#EF4040",theme:"light",color:"red",iconUrl:"../img/bi_x-octagon.svg",position:"topRight",timeout:5e3,close:!1}),h(s.hits),a.style.display="none"}).catch(s=>{console.log(s),a.style.display="none"})),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
