const card = document.querySelector(".card");
const load = document.querySelector(".load");

setTimeout(() => {
    load.classList.add("disabled");
    load.classList.remove("show");

},1000)