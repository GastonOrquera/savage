const abrir = document.querySelector("#abrir");
const nav = document.querySelector("#nav");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
nav.classlist.add(".visible");
})

cerrar.addEventListener("click", () => {
    nav.classlist.remove(".visible");
    })