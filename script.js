let show = true;

const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle");
const menuLinks = menuContent.querySelectorAll(".list-menu li a");

menuToggle.addEventListener("click", () => {
    menuContent.classList.toggle("on", show);
    show = !show;
});

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        menuContent.classList.remove("on");
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetSectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
        const newScrollY = targetSectionTop - headerHeight;
        window.scrollTo({
            top: newScrollY,
            behavior: 'smooth'
        });
        event.preventDefault();
    });
});
