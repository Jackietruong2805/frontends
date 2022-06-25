const navitems = document.querySelectorAll(".nav__item");

navitems.forEach(item => {
    navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        console.log(event);
        divitem = document.querySelector(`${event.target.attributes[0].nodeValue}`);
        console.log(divitem);
        navcontent = document.querySelectorAll(".view")
        console.log(navcontent);
        if(!divitem.classList.contains("show")){
            divitem.classList.add("show");
        }
    })
})
