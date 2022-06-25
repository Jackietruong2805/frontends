// const card = document.querySelector(".card");
// const load = document.querySelector(".load");

const cardbody = document.querySelector(".card__body");

setTimeout(() => {
    // cardbody.innerHTML = "";
    // cardbody.innerHTML = `
    // <h5 class="card__title">Card title</h5>
    // <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // <a class="card__link">Go somewhere</a>  
    // `;
    const cardtitle = cardbody.querySelector(".card__title");
    const loadcontent = cardbody.querySelector(".loadcontent");
    cardtitle.textContent = "";
    cardbody.innerHTML = `
     <h5 class="card__title">Card title</h5>
     <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a class="card__link">Go somewhere</a>  
     `;
},1500);