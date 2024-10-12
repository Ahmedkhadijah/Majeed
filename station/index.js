let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " ";
  saveEl.textContent += countStr;
  // countEl.textContent = 0;
  // count = 0;
}

function saveBtn() {
  document.getElementById("save-btn").innerText = saveEl.textContent;
}
console.log(saveEl.textContent);