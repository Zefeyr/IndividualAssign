function scrollPage(offset) {
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
}

document.getElementById('scrollUpBtn').addEventListener('click', function () {
    scrollPage(-200);
});

document.getElementById('scrollDownBtn').addEventListener('click', function () {
    scrollPage(200);
});

document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav a");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            item.style.color = "#2ecc71";
        });

        item.addEventListener("mouseout", function () {
            item.style.color = "#000000";
        });
    });
});