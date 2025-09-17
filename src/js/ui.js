export const renderKachel = (name = "NAME FEHLT..", image, id) => {
  const productWrapper = document.getElementById("productWrapper");
  const kachel = `
          <article class="[ article ] p-2 bg-[#e5e5e5]">
            <h2 class="text-lg mb-3 h-[4em] overflow-auto">
              ${name}
            </h2>
            <img
              src="${image}"
              title="Produkt"
              class="w-1/1 h-[20em] object-contain border border-[#999999] mb-2 bg-white p-2"
            />
            <button data-id="${id}" class="[ addButton ] w-1/1 cursor-pointer bg-black text-white p-2">
              Add to card
            </button>
          </article>`;
  productWrapper.insertAdjacentHTML("beforeend", kachel);
};
