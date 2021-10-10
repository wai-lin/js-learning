const h4 = document.querySelector("#countDisplay");
const incCountBtn = document.querySelector("#incCountBtn");
const resetCountBtn = document.querySelector("#resetCountBtn");
const decCountBtn = document.querySelector("#decCountBtn");

let count = 0;
h4.innerHTML = count;

function incrementCount() {
  count += 1;
  h4.innerHTML = count;
}

function decrementCount() {
  count -= 1;
  h4.innerHTML = count;
}

function resetCount() {
  count = 0;
  h4.innerHTML = count;
}

incCountBtn.addEventListener("click", incrementCount);
resetCountBtn.addEventListener("click", resetCount);
decCountBtn.addEventListener("click", decrementCount);
