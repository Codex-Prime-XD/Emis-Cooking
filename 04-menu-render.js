/* ================= MENU RENDER ================= */
function renderMenu(){
  const t = i18n[currentLang];
  const mainsList = document.getElementById("mainsList");
  const dessertsList = document.getElementById("dessertsList");
  mainsList.innerHTML = mains.map(m=>`
    <div class="menu-item" data-dish="${m.id}" data-type="main">
      <img src="${m.img}" alt="${m.name}">
      <div class="menu-item-info">
        <div class="menu-item-name">${m.name}</div>
        <div class="menu-item-desc">${t[m.descKey]||""}</div>
      </div>
      <div class="menu-item-price">$${m.price}</div>
    </div>
  `).join("");
  dessertsList.innerHTML = desserts.map(d=>`
    <div class="menu-item dessert-item" data-dish="${d.id}" data-type="dessert">
      <img src="${d.img}" alt="${d.name}">
      <div class="menu-item-info">
        <div class="menu-item-name">${d.name}</div>
        <div class="menu-item-desc">${t[d.descKey]||""}</div>
      </div>
      <div class="menu-item-price">$${d.price}</div>
    </div>
  `).join("");
  document.querySelectorAll(".menu-item").forEach(el=>{
    el.addEventListener("click", ()=>openDishDetail(el.dataset.type, el.dataset.dish));
  });
}
