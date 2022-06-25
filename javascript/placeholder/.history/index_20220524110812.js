const card = document.querySelector(".card");
const load = document.querySelector(".load");

setTimeout(() => {
    load.classList.add("disabled");
    card.classList.add("show");
},1500);