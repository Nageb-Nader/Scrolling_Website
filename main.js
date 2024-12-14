let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value / 1.4 + "px";
    mountains3.style.top = value / 3 + "px";
    mountains4.style.top = value / 4 + "px";
    river.style.top = value / 5 + "px";
    boat.style.left = value * 2 + "px";
}