const input = document.querySelector("#input");
const grams = document.querySelector("#grams");
const kg = document.querySelector("#kg");
const ounces = document.querySelector("#ounces");

input.addEventListener("input", (e) => {
  let pounds = e.target.value;

  let gram_value = pounds * 453.5924;
  grams.textContent = gram_value;

  let kg_value = pounds * 0.4535924;
  kg.textContent = kg_value;

  let ounce_value = pounds * 16;
  ounces.textContent = ounce_value;
});
