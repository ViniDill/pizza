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

        document.querySelectorAll("section").forEach(section => {
            section.classList.remove("section-spacing");
        });

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.classList.add("section-spacing");
    });
});
