// const card = document.querySelector(".card");
// const load = document.querySelector(".load");

const cardbody = document.querySelector(".card__body");

setTimeout(() => {
    cardbody.innerHTML = "";
    cardbody.innerHTML = `
    <h5 style="margin: 0;">
        <span class="holder--top"></span>
    </h5>
<p class="load__content">
    <span class="load__holder holder--1"></span>
    <span class="load__holder"></span>
    <span class="load__holder"></span>
    <span class="load__holder holder--4"></span>
    <span class="load__holder holder--5"></span>
</p>
<a class="load__link" href=""></a>    
    `;
},1500);