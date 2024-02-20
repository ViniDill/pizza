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

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});