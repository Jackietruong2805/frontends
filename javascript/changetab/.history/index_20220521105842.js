const navitems = document.querySelectorAll(".nav__item");

navitems.forEach(item => {
    navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        console.log(event);
        items = document.querySelector(`${event.target.attributes[0].nodeValue}`);
        if(items)
        items.classList.add("show");
    })
})
