window.onscroll = function () {
  const video = document.getElementById("video");
  const body = document.querySelector("body");
  const videoHeight = video.offsetHeight;

  if (document.documentElement.scrollTop <= videoHeight) {
    body.classList.add("fix");
  } else {
    body.classList.remove("fix");
  }
};
