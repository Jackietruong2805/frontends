window.onload = function () {
  var $header = document.querySelector(".header");
  var $cover = document.querySelector(".cover");

  var headerHeight = $header.offsetHeight;
  document.body.onscroll = function () {
    if (document.documentElement.scrollTop <= headerHeight) {
      $cover.classList.add("fixed");
    } else {
      $cover.classList.remove("fixed");
    }
  };
};
