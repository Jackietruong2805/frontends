// window.onload = function () {
//   var $video = document.querySelector(".video");
//   var $container = document.querySelector(".header");

//   var videoHeight = $video.offsetHeight;
//   document.body.onscroll = function () {
//     if (document.documentElement.scrollTop <= videoHeight) {
//       $container.classList.add("fixed");
//     } else {
//       $container.classList.remove("fixed");
//     }
//   };
// };

window.onload = function () {
  var header = document.querySelector(".header");
  var cover = document.querySelector(".cover");

  var coverHeight = cover.offsetHeight;
  var headerHeight = header.offsetHeight;
  document.body.onscroll = function () {
    if (document.documentElement.scrollTop < headerHeight) {
      cover.classList.remove("fixed");
    } else {
      cover.classList.add("cover");
    }
  };
};
