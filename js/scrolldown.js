
const scrolldownInners = document.getElementsByClassName("scrolldown-inner");


Array.from(scrolldownInners).forEach(scrolldownInner => {

    function startLoop() {
        setTimeout(function () {
            scrolldownInner.style.transform = "translateY(15px)";
            scrolldownInner.style.transition = "transform 1.0s ease-in";
            setTimeout(function () {
                scrolldownInner.style.transition = "";
                scrolldownInner.style.transform = "translateY(0)";
            }, 1000);
            startLoop();
        }, 4000);
    }

  
    startLoop();
});