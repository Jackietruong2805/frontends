// const getEle = (id) => {
//   return document.getElementById(id);
// };
// // const dropdown = () => {
// //   let menu = getEle("menu");
// //   if (menu.classList.contains("show")) {
// //     menu.classList.remove("show");
// //   } else {
// //     menu.classList.add("show");
// //   }
// // };

// // const $button = getEle("dropdownmenubutton");

// // document.addEventListener("click", (event) => {
// //   //   console.log(event);
// //   let menu = getEle("menu");
// //   const cover = getEle("html");
// //   const divlist = getEle("divlist");
// //   if (event.target.isSameNode(cover) || event.target.isSameNode(divlist)) {
// //     if (event.target.isSameNode($button)) {
// //       //
// //     } else {
// //       menu.classList.remove("show");
// //     }
// //   }
// // });

// window.onload = function () {
//   init();
  
//   document.addEventListener("click", (event) => {
//   const $allDropdown = document.querySelectorAll('.dropdown');
//   $allDropdown.forEach((item,index)=>{
//       //   console.log(event);
//       const divlist = document.querySelector(".dropdownremove");
//       console.log(divlist);
//       let menu = item.querySelector(".menu");
//       const cover = getEle("html");
//       const $button = item.querySelector(".dropdownmenubutton");
//       if (event.target.isSameNode(cover) || event.target.isSameNode(divlist)) {
//         if (event.target.isSameNode($button)) {
//           //
//         } else {
//           menu.classList.remove("show");
//         }
//       }
    
//   });
// });
  
// };

// const init = ()=>{
//     // document.querySelector(`.dropdown`).onclick = ()=>{
//     //   console.log("123");
//     const $allDropdown = document.querySelectorAll('.dropdown');
//     $allDropdown.forEach((item, index)=>{ 
//       item.querySelector(`.dropdown__button`).onclick = ()=>{
//           attachDropdownEvent(item);
//       }
//       // attachDropdownEvent(item);
//     });
//   // };
  
// }
// /**
//  * 
//  * @param {HTMLElement} container 
//  */
// const attachDropdownEvent = container=>{
//     const menulist = container.querySelector("#menu");
//     // console.log(menulist);
//     if(menulist.classList.contains("show")){
//         menulist.classList.remove("show");
//     }else{
//         menulist.classList.add("show");
//     }
// }
const dropdown = document.querySelector(".dropdown"); 
const dropdownbutton = document.querySelector(".dropdown__button");
// const dropdownmenu = document.querySelector(".dropdown__menu");
dropdownbutton.addEventListener("click", (e)=>{  
      dropdown.forEach(item =>(){
      const dropdownmenu = item.querySelector(".dropdown__menu");
      dropdownmenu.classList.toggle("show");
    })
});