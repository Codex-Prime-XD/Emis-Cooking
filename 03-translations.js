/* ================= TRANSLATIONS ================= */
const i18n = {
  fr:{
    tagline:"Good food, good mood",
    orderNow:"Commander",
    call:"Appeler : +1 912 555 0176",
    reservations:"Réservations",
    specialties:"Nos Spécialités",
    carouselEyebrow:"Sélection du Chef",
    carouselTitle:"Nos Spécialités",
    menuHeading:"Notre Menu",
    mains:"Plats Principaux",
    desserts:"Desserts",
    footerNote:"Projet portfolio par Oblivįon Sephįroth — démo design & développement.",
    descRibs:"Braisées lentement, glaçage bourbon-BBQ maison.",
    descTilapia:"Filet doré, légumes de saison, citron frais.",
    descSalmon:"Saumon rôti, épinards à la crème, champignons.",
    descAlfredo:"Poulet croustillant, sauce parmesan, linguines.",
    descPlatter:"Assortiment généreux pour partager, spécial famille.",
    descSoup:"Velouté crémeux, pommes de terre, herbes fraîches.",
    descTacos:"Tacos croustillants, viande épicée, salsa maison.",
    descCheesecake:"Onctueux, base biscuitée, coulis de fruits rouges.",
    descLava:"Cœur fondant au chocolat noir, glace vanille.",
    descPecan:"Pâte sablée, noix de pécan caramélisées.",
    descBrulee:"Crème vanille, croûte de caramel craquante.",
    descCobbler:"Pommes tièdes, crumble doré, cannelle.",
    addToOrder:"Ajouter à la commande",
    addedToOrder:"Ajouté ✓"
  },
  en:{
    tagline:"Good food, good mood",
    orderNow:"Order Now",
    call:"Call: +1 912 555 0176",
    reservations:"Reservations",
    specialties:"Our Specialities",
    carouselEyebrow:"Chef's Selection",
    carouselTitle:"Our Specialities",
    menuHeading:"Our Menu",
    mains:"Main Dishes",
    desserts:"Desserts",
    footerNote:"Portfolio project by Oblivįon Sephįroth — design & development demo.",
    descRibs:"Slow-braised, house bourbon-BBQ glaze.",
    descTilapia:"Golden fillet, seasonal vegetables, fresh lemon.",
    descSalmon:"Roasted salmon, creamed spinach, mushrooms.",
    descAlfredo:"Crispy chicken, parmesan sauce, linguine.",
    descPlatter:"Generous sharing platter, family favorite.",
    descSoup:"Creamy potato velouté, fresh herbs.",
    descTacos:"Crispy tacos, spiced meat, house salsa.",
    descCheesecake:"Silky, buttery crust, berry coulis.",
    descLava:"Molten dark chocolate center, vanilla ice cream.",
    descPecan:"Shortcrust pastry, caramelized pecans.",
    descBrulee:"Vanilla custard, crackling caramel crust.",
    descCobbler:"Warm apples, golden crumble, cinnamon.",
    addToOrder:"Add to Order",
    addedToOrder:"Added ✓"
  },
  de:{
    tagline:"Good food, good mood",
    orderNow:"Jetzt Bestellen",
    call:"Anrufen: +1 912 555 0176",
    reservations:"Reservierungen",
    specialties:"Unsere Spezialitäten",
    carouselEyebrow:"Auswahl des Küchenchefs",
    carouselTitle:"Unsere Spezialitäten",
    menuHeading:"Unsere Speisekarte",
    mains:"Hauptgerichte",
    desserts:"Desserts",
    footerNote:"Portfolio-Projekt von Oblivįon Sephįroth — Design- & Entwicklungs-Demo.",
    descRibs:"Langsam geschmort, hausgemachte Bourbon-BBQ-Glasur.",
    descTilapia:"Goldenes Filet, Saisongemüse, frische Zitrone.",
    descSalmon:"Gebratener Lachs, cremiger Spinat, Pilze.",
    descAlfredo:"Knuspriges Hähnchen, Parmesansauce, Linguine.",
    descPlatter:"Großzügige Platte zum Teilen, Familienliebling.",
    descSoup:"Cremiges Kartoffelvelouté, frische Kräuter.",
    descTacos:"Knusprige Tacos, würziges Fleisch, hausgemachte Salsa.",
    descCheesecake:"Seidig, buttriger Boden, Beerensauce.",
    descLava:"Flüssiger dunkler Schokoladenkern, Vanilleeis.",
    descPecan:"Mürbeteig, karamellisierte Pekannüsse.",
    descBrulee:"Vanillecreme, knackige Karamellkruste.",
    descCobbler:"Warme Äpfel, goldener Streusel, Zimt.",
    addToOrder:"Zur Bestellung hinzufügen",
    addedToOrder:"Hinzugefügt ✓"
  }
};

let currentLang = "fr";

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll(".lang-switch button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
  renderMenu();
}

document.querySelectorAll(".lang-switch button").forEach(b=>{
  b.addEventListener("click", ()=>applyLang(b.dataset.lang));
});
