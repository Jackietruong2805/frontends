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
window.onload = ()=>{
  
}
const init = ()=>{
  const dropdown = document.querySelectorAll(".dropdown");
  const dropdownmenu = document.querySelector(".dropdown__menu");
  const cover = document.querySelector(".html");

  dropdown.forEach((item) =>{
    console.log(item);
      const dropdownbutton = item.querySelector(".dropdown__button");
      const dropdownmenu = item.querySelector(".dropdown__menu");
      dropdownbutton.addEventListener("click", event => {
        dropdownmenu.classList.toggle("show");
      })

      document.addEventListener("click", (event) => {
        console.log(event);
        if (event.target.isSameNode(item)){
          dropdownmenu.classList.remove("show");
        }else if(event.target.isSameNode(cover)){
          dropdownmenu.classList.remove("show");
        }else if(!item.contains(event.target)){
          dropdownmenu.classList.remove("show");
        }
      });
  });
}


