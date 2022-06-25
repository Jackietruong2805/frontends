const navitems = document.querySelectorAll(".nav__item");
const navbuttons = document.querySelectorAll(".nav__button");
const views = document.querySelectorAll(".view");
// const active = (item)=>{
//   const buttons = item.querySelectorAll(".nav__button");
//   buttons.forEach(item => item.addEventListener("click", event =>{
//       item.classList.add("active");
//   }));
// }

navitems.forEach((item) => {
  const navbutton = item.querySelector(".nav__button");
  // console.log(navbutton);
  navbutton.addEventListener("click", (event) => {
    console.log(event);
    navitems.forEach((item) => {
      item.classList.remove("show-2");
    });

    item.classList.add("show-2");

    divitem = document.querySelector(navbutton.dataset.target);
    // console.log(divitem);
    views.forEach((item) => {
      item.classList.remove("show", "active");
    });

    divitem.classList.add("show");
    setTimeout(() => {
      divitem.classList.add("active");
    },100);
  });
  
});



