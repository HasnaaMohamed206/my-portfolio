const spans = document.querySelectorAll('.About .left .options span');

spans.forEach(span => {
    span.addEventListener('click', () => {
        spans.forEach(s => s.classList.remove('active'));
        span.classList.add('active');
    });
});

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (sideMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
});
