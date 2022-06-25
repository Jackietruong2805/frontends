const navitems = document.querySelectorAll(".nav__item");

navitems.forEach(item => {
    navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        console.log(event);
    })
})
