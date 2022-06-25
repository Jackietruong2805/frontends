const navitems = document.querySelectorAll(".nav__item");
const navbuttons = document.querySelectorAll(".nav__button");

navitems.forEach((item) => {
  const navbutton = item.querySelector(".nav__button");
  console.log(navbutton);
  navbutton.addEventListener("click", (event) => {
    console.log(event);
    navitems.forEach((item) => {
      item.classList.remove("show-2");
    });

    item.classList.add("show-2");

    divitem = document.querySelector(navbutton.dataset.target);
    // console.log(divitem);
    navcontent = document.querySelectorAll(".nav__tabcontent .view");
    navcontent.forEach((item) => {
      if (item.classList.contains("show")) {
        item.classList.remove("show");
      }
    });
    // console.log(navcontent);
    if (!divitem.classList.contains("show")) {
      divitem.classList.add("show");
    }
  });
});

const active = ()=>{
    
}