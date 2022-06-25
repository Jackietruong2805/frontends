// const card = document.querySelector(".card");
// const load = document.querySelector(".load");

const cardbody = document.querySelector(".card__body");

setTimeout(() => {
    const cardtitle = cardbody.querySelector(".card__title");
    cardtitle.textContent = "";
    cardtitle.textContent = "Card title";
    cardbody.textContent = "";
    cardbody.innerHTML = `
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="card__link">Go somewhere</a>  
    `;
},1500);