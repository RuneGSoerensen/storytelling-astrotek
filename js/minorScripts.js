const top = document.querySelector(".omloebstid");
const mid = document.querySelector(".tid");
const bottom = document.querySelector(".temperatur");

const topInfo = document.querySelector("top-info");
const midInfo = document.querySelector("mid-info");
const bottomInfo = document.querySelector("bottom-info");

topIcon.addEventListener('mouseover', function() {
    topInfo.style.display = "block";
});

topIcon.addEventListener('mouseout', function() {
    topInfo.style.display = "none";
});

midIcon.addEventListener('mouseover', function() {
    midInfo.style.display = "block";
});

midIcon.addEventListener('mouseout', function() {
    midInfo.style.display = "none";
});

bottomIcon.addEventListener('mouseover', function() {
    bottomInfo.style.display = "block";
});

bottomIcon.addEventListener('mouseout', function() {
    bottomInfo.style.display = "none";
});
