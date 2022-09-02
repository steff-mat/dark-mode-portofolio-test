let light = document.getElementById("light-mode");
let dark = document.getElementById("dark-mode");
let body = document.getElementById("body");

function colorChange(color) {
    body.style.background = color;
}

light.addEventListener("click", () => {
    colorChange("#f0f0f0");
});

dark.addEventListener("click", () => {
    colorChange("#141414");
});

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    colorChange("#141414");
} else if (
    window.matchMedia !=
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    colorChange("#f0f0f0");
}
