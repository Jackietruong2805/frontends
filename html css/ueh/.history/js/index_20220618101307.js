window.onload = function () {
  var $header = document.querySelector(".header");
  var $container = document.querySelector(".header");

  var headerHeight = $header.offsetHeight;
  document.body.onscroll = function () {
    if (document.documentElement.scrollTop <= headerHeight) {
      $container.classList.add("fixed");
    } else {
      $container.classList.remove("fixed");
    }
  };
};
