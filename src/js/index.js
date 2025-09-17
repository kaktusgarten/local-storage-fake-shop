import "../style.css";
import { getProducts } from "./network";
import { renderKachel } from "./ui";
const btnClearStorage = document.getElementById("btnClearStorage");

const products = await getProducts();

window.addEventListener("load", () => {
  getProducts();
});

// Render Cards
products.forEach((e) => {
  renderKachel(e.title, e.image, e.id);
});
// 1. LocalStorage initialisieren und füllen mit IDs:
let cardProducts = JSON.parse(localStorage.getItem("cardItems")) ?? [];
localStorage.setItem("cardItems", JSON.stringify(cardProducts));

// 2. LocalStorage füllen mit full product infos
let cardProductsFull = JSON.parse(localStorage.getItem("cardItemFull")) ?? [];
localStorage.setItem("cardProductsFull", cardProductsFull);

// Klick-Handler
const productWrapper = document.getElementById("productWrapper");
productWrapper.addEventListener("click", (e) => {
  if (e.target.matches(".addButton")) {
    // 1.
    const id = e.target.dataset.id;
    console.log("Button-ID:", id);
    console.log("Bisherige Produkte:", cardProducts);
    // Neues Produkt hinzufügen
    cardProducts.push(id);
    // LocalStorage aktualisieren
    localStorage.setItem("cardItems", JSON.stringify(cardProducts));

    // 2.
    const article = e.target.closest("article");
    // Finde URL und TITLE:
    const imgUrl = article.querySelector("img").src;
    const title = article.querySelector("h2").textContent.trim();
    const articleDataFull = { id: id, imgURL: imgUrl, title: title };

    cardProductsFull.push(articleDataFull);

    localStorage.setItem("cardItemsFull", JSON.stringify(cardProductsFull));
    console.log("IM Local Storage: ");
    console.log(cardProductsFull);
  }
});

btnClearStorage.addEventListener("click", function (e) {
  console.clear();
  console.log("Local Storage gelöscht!");
  localStorage.clear();
  cardProducts = [];
  cardProductsFull = [];
});
