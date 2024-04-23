"use strict";


// domContentLoaded gør at den først ser javascript filen når hjemmesiden er loaded
document.addEventListener("DOMContentLoaded", function () {
// SOLEN
const button = document.getElementById("udforskSolen");
const url = "../json/planeter.json";
const bodyelem = document.body
button.addEventListener("click", () => {
    createElements();
    forsideslide();

});


// function som laver en underside og giver elementerne(tags) deres classes 
// hermed bruger json til at finde noget data i vores json fil(planeter.json)
function createElements() {
    fetch(url)
    .then(res => res.json())
    .then(json => {

        console.log(json);
        
        const undersideSection = document.createElement("section");
        undersideSection.classList.add("underside-solen");
    
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("tilbage-button-container");
    
        const backButton = document.createElement("button");
        backButton.classList.add("tilbage-button");
        backButton.textContent = "Tilbage";
        buttonContainer.appendChild(backButton);
    
        const arrowImage = document.createElement("img");
        arrowImage.classList.add("tilbage-arrow");
        arrowImage.src = "../media/ikoner/arrow.png";
        buttonContainer.appendChild(arrowImage);
    
        undersideSection.appendChild(buttonContainer);
    
        const undersideTekst = document.createElement("p");
        undersideTekst.classList.add("underside-tekst-solen")
         undersideTekst.innerHTML = `${json[0].history}`;
        undersideSection.appendChild(undersideTekst);
    
        const solensOverfladeImage = document.createElement("img");
        solensOverfladeImage.src = "../media/solens-overflade-01.webp";
        solensOverfladeImage.alt = `billede af ${json[0].planetName}`;
        solensOverfladeImage.classList.add("solens-overflade");
        undersideSection.appendChild(solensOverfladeImage);
    
        const forsiden = document.getElementById("solen");
        forsiden.appendChild(undersideSection);
    
        
    
        buttonContainer.addEventListener("click", () => {
            reverseAnimations(undersideSection);
        });
    
       
        undersideTekst.offsetHeight;
        undersideTekst.style.transition = "opacity 2s ease-in-out";
        undersideTekst.style.opacity = 1;
    
        undersideSection.style.transition = "transform 1s ease-in-out";
        undersideSection.style.transform = "translate(-100%)";
        
        bodyelem.classList.add("bodystuck")
    }) .catch(error => console.error("error:", error));
   
}
  
   


// function som gør at forsiden forsvinder
function forsideslide() {
    const forsideSection = document.getElementById("forsideSektion");
    forsideSection.style.transition = "transform 1s ease-in-out";
    forsideSection.style.transform = "translate(-100%)";
}



// function som går tilbage til forsiden
function reverseAnimations(undersideSection) {
    const forsideSection = document.getElementById("forsideSektion");
    forsideSection.style.transition = "transform 1s ease-in-out";
    forsideSection.style.transform = "translate(0)";

    undersideSection.style.transition = "transform 1s ease-in-out";
    undersideSection.style.transform = "translate(0%)";
    bodyelem.classList.remove("bodystuck")


// setTimeout på en function som fjerne elementerne lavet af createElements
    setTimeout(() => {
        forsiden.removeChild(undersideSection);
    }, 2000); 
    
}



 
 




//  MERKUR

    const merkurSection = document.getElementById("merkur");
    const merkurButton = document.getElementById("merkurButton");
    const merkurUndersideSection = document.getElementsByClassName("merkurUnderside")[0];
    const merkurBackbutton = document.getElementById("merkurBackButton");

    merkurButton.addEventListener("click", () => {
        createMerkur();
    });


    function createMerkur() {
        fetch(url)
        .then(res => res.json())
        .then(json => {

            const merkurUndersideTekst = document.getElementById("merkurP");
            merkurUndersideTekst.innerHTML = `${json[1].history}`;

            const merkurUndersideFunFact = document.getElementById("merkurFunFact");
            merkurUndersideFunFact.innerHTML = `${json[1].funFact}`;
            
            document.body.classList.add("bodystuck");

            merkurSection.style.transition = "transform 1s ease-in-out";
            merkurSection.style.transform = "translate(-100%)";
            merkurUndersideSection.style.transition = "transform 1s ease-in-out";
            merkurUndersideSection.style.transform = "translate(-100%)";
        })
        .catch(error => console.error("error:", error));
    }

   


    merkurBackbutton.addEventListener("click", () => {
        reverseMerkurAnimations(merkurUndersideSection);
    });

    function reverseMerkurAnimations(merkurUndersideSection) {
        const merkurSection = document.getElementById("merkur");
        merkurSection.style.transition = "transform 1s ease-in-out";
        merkurSection.style.transform = "translate(0)";

        merkurUndersideSection.style.transition = "transform 1s ease-in-out";
        merkurUndersideSection.style.transform = "translate(0%)";
        document.body.classList.remove("bodystuck");
    }


// Venus
const venusSection = document.getElementById("venus");
const venusButton = document.getElementById("venusButton");
const venusUndersideSection = document.getElementsByClassName("undersideVenus")[0];
const venusBackButton = document.getElementById("venusBackButton");

venusButton.addEventListener("click", () => {
    createVenus();
});

function createVenus() {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const venusUndersideTekst = document.getElementById("venusP");
            venusUndersideTekst.innerHTML = `${json[2].history}`;
            
            document.body.classList.add("bodystuck");
            
            venusSection.style.transition = "transform 1s ease-in-out";
            venusSection.style.transform = "translate(-100%)";
            venusUndersideSection.style.transition = "transform 1s ease-in-out";
            venusUndersideSection.style.transform = "translate(-100%)";
        })
        .catch(error => console.error("error:", error));
}

venusBackButton.addEventListener("click", () => {
    reverseVenusAnimations(venusUndersideSection);
});

function reverseVenusAnimations(venusUndersideSection) {
    venusSection.style.transition = "transform 1s ease-in-out";
    venusSection.style.transform = "translate(0)";
    
    venusUndersideSection.style.transition = "transform 1s ease-in-out";
    venusUndersideSection.style.transform = "translate(0%)";
    
    document.body.classList.remove("bodystuck");
}


// Jorden
const jordenSection = document.getElementById("jorden");
const jordenButton = document.getElementById("jordenButton");
const jordenUndersideSection = document.getElementsByClassName("undersideJorden")[0];
const jordenBackButton = document.getElementById("jordenBackButton");

jordenButton.addEventListener("click", () => {
    createJorden();
});

function createJorden() {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const jordenUndersideTekst = document.getElementById("jordenP");
            jordenUndersideTekst.innerHTML = `${json[3].history}`;
            
            document.body.classList.add("bodystuck");
            
            jordenSection.style.transition = "transform 1s ease-in-out";
            jordenSection.style.transform = "translate(-100%)";
            jordenUndersideSection.style.transition = "transform 1s ease-in-out";
            jordenUndersideSection.style.transform = "translate(-100%)";
        })
        .catch(error => console.error("error:", error));
}

jordenBackButton.addEventListener("click", () => {
    reverseJordenAnimations(jordenUndersideSection);
});

function reverseJordenAnimations(jordenUndersideSection) {
    jordenSection.style.transition = "transform 1s ease-in-out";
    jordenSection.style.transform = "translate(0)";
    
    jordenUndersideSection.style.transition = "transform 1s ease-in-out";
    jordenUndersideSection.style.transform = "translate(0%)";
    
    document.body.classList.remove("bodystuck");
}



    // Mars
    const marsSection = document.getElementById("mars");
    const marsButton = document.getElementById("marsButton");
    const marsUndersideSection = document.getElementsByClassName("undersideMars")[0];
    const marsBackbutton = document.getElementById("marsBackButton");

    marsButton.addEventListener("click", () => {
        createMars();
    });

    function createMars() {
        fetch(url)
        .then(res => res.json())
        .then(json => {

            const marsUndersideTekst = document.getElementById("marsP");
            marsUndersideTekst.innerHTML = `${json[4].history}`;
        
            document.body.classList.add("bodystuck");

            marsSection.style.transition = "transform 1s ease-in-out";
            marsSection.style.transform = "translate(-100%)";
            marsUndersideSection.style.transition = "transform 1s ease-in-out";
            marsUndersideSection.style.transform = "translate(-100%)";
        })
        .catch(error => console.error("error:", error));
    }

    marsBackbutton.addEventListener("click", () => {
        reverseMarsAnimations(marsUndersideSection);
    });

    function reverseMarsAnimations(marsUndersideSection) {
        const marsSection = document.getElementById("mars");
        marsSection.style.transition = "transform 1s ease-in-out";
        marsSection.style.transform = "translate(0)";

        marsUndersideSection.style.transition = "transform 1s ease-in-out";
        marsUndersideSection.style.transform = "translate(0%)";
        document.body.classList.remove("bodystuck");
    }

    // Jupiter
    const jupiterSection = document.getElementById("jupiter");
    const jupiterButton = document.getElementById("jupiterButton");
    const jupiterUndersideSection = document.getElementsByClassName("undersideJupiter")[0];
    const jupiterBackButton = document.getElementById("jupiterBackButton");
    
    jupiterButton.addEventListener("click", () => {
        createJupiter();
    });
    
    function createJupiter() {
        fetch(url)
        .then(res => res.json())
        .then(json => {
            const jupiterUndersideTekst = document.getElementById("jupiterP");
            jupiterUndersideTekst.innerHTML = `${json[5].history}`;
            
            document.body.classList.add("bodystuck");
            
            jupiterSection.style.transition = "transform 1s ease-in-out";
            jupiterSection.style.transform = "translate(-100%)";
            jupiterUndersideSection.style.transition = "transform 1s ease-in-out";
            jupiterUndersideSection.style.transform = "translate(-100%)";
        })
        .catch(error => console.error("error:", error));
    }
    
    jupiterBackButton.addEventListener("click", () => {
        reverseJupiterAnimations(jupiterUndersideSection);
    });
    
    function reverseJupiterAnimations(jupiterUndersideSection) {
        jupiterSection.style.transition = "transform 1s ease-in-out";
        jupiterSection.style.transform = "translate(0)";
        
        jupiterUndersideSection.style.transition = "transform 1s ease-in-out";
        jupiterUndersideSection.style.transform = "translate(0%)";
        
        document.body.classList.remove("bodystuck");
    }

    // Saturn
const saturnSection = document.getElementById("saturn");
const saturnButton = document.getElementById("saturnButton");
const saturnUndersideSection = document.getElementsByClassName("undersideSaturn")[0];
const saturnBackButton = document.getElementById("saturnBackButton");

saturnButton.addEventListener("click", () => {
    createSaturn();
});

function createSaturn() {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        const saturnUndersideTekst = document.getElementById("saturnP");
        saturnUndersideTekst.innerHTML = `${json[6].history}`;
        
        document.body.classList.add("bodystuck");
        
        saturnSection.style.transition = "transform 1s ease-in-out";
        saturnSection.style.transform = "translate(-100%)";
        saturnUndersideSection.style.transition = "transform 1s ease-in-out";
        saturnUndersideSection.style.transform = "translate(-100%)";
    })
    .catch(error => console.error("error:", error));
}

saturnBackButton.addEventListener("click", () => {
    reverseSaturnAnimations(saturnUndersideSection);
});

function reverseSaturnAnimations(saturnUndersideSection) {
    saturnSection.style.transition = "transform 1s ease-in-out";
    saturnSection.style.transform = "translate(0)";
    
    saturnUndersideSection.style.transition = "transform 1s ease-in-out";
    saturnUndersideSection.style.transform = "translate(0%)";
    
    document.body.classList.remove("bodystuck");
}


// Uranus
const uranusSection = document.getElementById("uranus");
const uranusButton = document.getElementById("uranusButton");
const undersideUranusSection = document.getElementsByClassName("undersideUranus")[0];
const uranusBackButton = document.getElementById("uranusBackButton");

uranusButton.addEventListener("click", () => {
    createUranus();
});

function createUranus() {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        const uranusUndersideTekst = document.getElementById("uranusP");
        uranusUndersideTekst.innerHTML = `${json[7].history}`;
        
        document.body.classList.add("bodystuck");
        
        uranusSection.style.transition = "transform 1s ease-in-out";
        uranusSection.style.transform = "translate(-100%)";
        undersideUranusSection.style.transition = "transform 1s ease-in-out";
        undersideUranusSection.style.transform = "translate(-100%)";
    })
    .catch(error => console.error("error:", error));
}

uranusBackButton.addEventListener("click", () => {
    reverseUranusAnimations(undersideUranusSection);
});

function reverseUranusAnimations(undersideUranusSection) {
    uranusSection.style.transition = "transform 1s ease-in-out";
    uranusSection.style.transform = "translate(0)";
    
    undersideUranusSection.style.transition = "transform 1s ease-in-out";
    undersideUranusSection.style.transform = "translate(0%)";
    
    document.body.classList.remove("bodystuck");
}


// Neptune
const neptuneSection = document.getElementById("neptun");
const neptuneButton = document.getElementById("neptuneButton");
const undersideNeptuneSection = document.getElementsByClassName("undersideNeptune")[0];
const neptuneBackButton = document.getElementById("neptuneBackButton");

neptuneButton.addEventListener("click", () => {
    createNeptune();
});

function createNeptune() {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        const neptuneUndersideTekst = document.getElementById("neptuneP");
        neptuneUndersideTekst.innerHTML = `${json[8].history}`;
        
        document.body.classList.add("bodystuck");
        
        neptuneSection.style.transition = "transform 1s ease-in-out";
        neptuneSection.style.transform = "translate(-100%)";
        undersideNeptuneSection.style.transition = "transform 1s ease-in-out";
        undersideNeptuneSection.style.transform = "translate(-100%)";
    })
    .catch(error => console.error("error:", error));
}

neptuneBackButton.addEventListener("click", () => {
    reverseNeptuneAnimations(undersideNeptuneSection);
});

function reverseNeptuneAnimations(undersideNeptuneSection) {
    neptuneSection.style.transition = "transform 1s ease-in-out";
    neptuneSection.style.transform = "translate(0)";
    
    undersideNeptuneSection.style.transition = "transform 1s ease-in-out";
    undersideNeptuneSection.style.transform = "translate(0%)";
    
    document.body.classList.remove("bodystuck");
}

});

