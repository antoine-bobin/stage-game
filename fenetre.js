
const button = document.querySelector("#buttoncube");

button.addEventListener("click", (event) => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});


