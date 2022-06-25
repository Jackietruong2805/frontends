// const card = document.querySelector(".card");
// const load = document.querySelector(".load");

const cardbody = document.querySelector(".card__body");
const cardtitle = cardbody.querySelector(".card__title");
const covercontent = cardbody.querySelector(".load__content");

setTimeout(() => {
    cardtitle.textContent = "Card title";
    covercontent.textContent = `
    Some quick example text to build on the card title and make up the bulk of the card's content
    `;
},1500);