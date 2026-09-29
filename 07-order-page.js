/* ================= ORDER PAGE (random rotating bg) ================= */
const menuPage = document.getElementById("menuPage");
const menuBgLayer = document.getElementById("menuBgLayer");
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

specialtyImages.forEach((src,i)=>{
  const div = document.createElement("div");
  div.className = "menu-bg-slide" + (i===0?" active":"");
  div.style.backgroundImage = `url('${src}')`;
  menuBgLayer.appendChild(div);
});

let lastBgIndex = 0;
setInterval(()=>{
  if(!menuPage.classList.contains("open")) return;
  const slides = menuBgLayer.querySelectorAll(".menu-bg-slide");
  let next = Math.floor(Math.random()*slides.length);
  if(next===lastBgIndex){ next = (next+1) % slides.length; }
  slides[lastBgIndex].classList.remove("active");
  slides[next].classList.add("active");
  lastBgIndex = next;
}, 3000);

openMenuBtn.addEventListener("click", ()=>{
  menuPage.classList.add("open");
  document.body.style.overflow="hidden";
});
closeMenuBtn.addEventListener("click", ()=>{
  menuPage.classList.remove("open");
  document.body.style.overflow="";
  flashLangSwitch();
});
