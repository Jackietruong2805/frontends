const card = document.querySelector(".card");
const load = document.querySelector(".load");

setTimeout(() => {
    load.classList.add("disabled");
    card.classList.remove("show");
},1000)