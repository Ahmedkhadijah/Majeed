const body = document.body;
const toggleWrapper = document.querySelector(".toggle__wrapper");
const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    if (radio.id === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  });
});
