export function menu() {
  const menuMobile = document.getElementById("menu-mobile");

  menuMobile.addEventListener("click", function () {
    const menuMobileOptions = document.getElementById("menu-mobile-options");
    menuMobileOptions.classList.toggle("active-menu");
    menuMobile.classList.toggle("animationTransform");
    document.body.classList.toggle("overflow-body");
  });
}
