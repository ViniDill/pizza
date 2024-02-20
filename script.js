let show = true;

const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle");
const menuLinks = menuContent.querySelectorAll(".list-menu li a");

menuToggle.addEventListener("click", () => {
    menuContent.classList.toggle("on", show);
    show = !show;
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuContent.classList.remove("on");
    });
});