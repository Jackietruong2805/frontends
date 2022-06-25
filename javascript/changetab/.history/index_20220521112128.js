const navitems = document.querySelectorAll(".nav__item");

navitems.forEach(item => {
    navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        console.log(event);
        divitem = document.querySelector(`${event.target.attributes[0].nodeValue}`);
        if(!divitem.classList.contains("show")){
            const navtabcontent = document.querySelector("nav__tabcontent>*");
            if(!event.target.isSameNode(divitem)){
                if(navtabcontent.classList.contains("show"))
                navtabcontent.classList.remove("show");
            }
            divitem.classList.add("show");
        }

        
    })
})
