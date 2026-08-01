const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

});

function animateCursor() {

    outline.style.left = mouseX + "px";
    outline.style.top = mouseY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

document.querySelectorAll("a, button").forEach((element) => {

    element.addEventListener("mouseenter", () => {

        outline.classList.add("cursor-hover");

    });

    element.addEventListener("mouseleave", () => {

        outline.classList.remove("cursor-hover");

    });

});