/* ================= DISH DETAIL ================= */
function openDishDetail(type, id){
  const list = type==="dessert" ? desserts : mains;
  const dish = list.find(d=>d.id===id);
  if(!dish) return;
  const t = i18n[currentLang];
  document.getElementById("dishDetailImg").src = dish.img;
  document.getElementById("dishDetailName").textContent = dish.name;
  document.getElementById("dishDetailDesc").textContent = t[dish.descKey]||"";
  document.getElementById("dishDetailPrice").textContent = "$"+dish.price;
  const orderBtn = document.getElementById("dishOrderBtn");
  orderBtn.dataset.state = "idle";
  orderBtn.textContent = t.addToOrder;
  document.getElementById("dishDetail").classList.add("open");
}
document.getElementById("dishDetailClose").addEventListener("click", ()=>{
  document.getElementById("dishDetail").classList.remove("open");
});
document.getElementById("dishOrderBtn").addEventListener("click", function(){
  const t = i18n[currentLang];
  this.textContent = t.addedToOrder;
  this.dataset.state = "added";
  setTimeout(()=>{
    document.getElementById("dishDetail").classList.remove("open");
  }, 900);
});
