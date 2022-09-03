let light = document.getElementById("light-mode");
let dark = document.getElementById("dark-mode");
let body = document.getElementById("body");
let backgroundBoxColor = document.getElementsByClassName("bg-box-color");

let blackishDark = "#151515";
let blackishLight = "#131313";
let whiteishLight = "#f0f0f0";
let whiteishDark = "#e9e9e9";

function check(bgBox) {
    document.getElementsByClassName(backgroundBoxColor);
    for (var i = 0; i < backgroundBoxColor.length; i++) {
        backgroundBoxColor[i].style.backgroundColor = bgBox;
    }
}

function colorChange(color) {
    body.style.background = color;
}

light.addEventListener("click", () => {
    colorChange(whiteishLight);
    check(whiteishDark);
});

dark.addEventListener("click", () => {
    colorChange(blackishDark);
    check(blackishLight);
});

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    colorChange(blackishDark);
    check(blackishLight);
} else if (
    window.matchMedia !=
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    colorChange(whiteishLight);
    check(whiteishDark);
}
