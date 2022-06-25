window.onload = function () {
  const active = () => {
    document.getElementById("menu__detail2").style.display = "none";
    document.getElementById("menu").style.display = "block";
  };

  document.querySelector(".active").onclick = active;

  const $allMenuItem = document.querySelectorAll(".menu__item");
  $allMenuItem.forEach((item) => {
    item.onclick = () => {
      const $menu = item.querySelector(".menu__dropdown");
      if ($menu) {
        if ($menu.classList.contains("show")) {
          $menu.classList.remove("show");
        } else {
          $menu.classList.add("show");
        }
      }
    };
  });
};
