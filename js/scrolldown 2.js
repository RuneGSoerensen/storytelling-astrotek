const scrolldownInner = document.getElementsByClassName("scrolldown-inner")[0]; // Assuming there's only one element with this class name

function startLoop() {
    setTimeout(function () {
        scrolldownInner.style.transform = "translateY(15px)"; // Moving down by 20px
        scrolldownInner.style.transition = "transform 1.0s ease-in";
        setTimeout(function() {
            scrolldownInner.style.transition = ""; // Remove the transition after moving down
            scrolldownInner.style.transform = "translateY(0)"; // Moving back to the original position
        }, 1000); // Half of the total animation time
        startLoop(); // Restart the loop
    }, 4000); // Total delay before starting next animation cycle
}

startLoop();