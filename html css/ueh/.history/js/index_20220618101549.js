window.onload = function () {
  var $video = document.querySelector(".video");
  var $container = document.querySelector(".header");

  var videoHeight = $video.offsetHeight;
  document.body.onscroll = function () {
    if (document.documentElement.scrollTop <= videoHeight) {
      $container.classList.add("fixed");
    } else {
      $container.classList.remove("fixed");
    }
  };
};
