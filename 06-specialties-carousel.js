/* ================= SPECIALTIES CAROUSEL (home) ================= */
const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
let carouselIndex = 0;

specialtyImages.forEach((src,i)=>{
  const slide = document.createElement("div");
  slide.className = "carousel-slide" + (i===0?" active":"");
  slide.innerHTML = `<img src="${src}" alt=""><div class="carousel-caption">${specialtyNames[i]}</div>`;
  carouselTrack.appendChild(slide);
  const dot = document.createElement("button");
  dot.className = i===0 ? "active":"";
  dot.setAttribute("aria-label","Slide "+(i+1));
  dot.addEventListener("click", ()=>goToSlide(i));
  carouselDots.appendChild(dot);
});

function goToSlide(i){
  const slides = carouselTrack.querySelectorAll(".carousel-slide");
  const dots = carouselDots.querySelectorAll("button");
  slides[carouselIndex].classList.remove("active");
  dots[carouselIndex].classList.remove("active");
  carouselIndex = i;
  slides[carouselIndex].classList.add("active");
  dots[carouselIndex].classList.add("active");
}

setInterval(()=>{
  goToSlide((carouselIndex+1) % specialtyImages.length);
}, 3000);
