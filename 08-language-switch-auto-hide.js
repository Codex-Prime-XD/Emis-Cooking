/* ================= LANGUAGE SWITCH AUTO-HIDE ================= */
const langSwitchEl = document.querySelector(".lang-switch");
let langHideTimer = null;
function flashLangSwitch(){
  langSwitchEl.classList.remove("hidden");
  clearTimeout(langHideTimer);
  langHideTimer = setTimeout(()=>{
    langSwitchEl.classList.add("hidden");
  }, 3000);
}
langSwitchEl.querySelectorAll("button").forEach(b=>{
  b.addEventListener("click", flashLangSwitch);
});
