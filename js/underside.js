"use strict";

document.addEventListener("DOMContentLoaded", function () {

const button = document.getElementById("udforskSolen");
const url = "../json/planeter.json";

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
    
        const forsiden = document.getElementById("forsiden");
        forsiden.appendChild(undersideSection);
    
        
    
        buttonContainer.addEventListener("click", () => {
            reverseAnimations(undersideSection);
        });
    
       
        undersideTekst.offsetHeight;
        undersideTekst.style.transition = "opacity 2s ease-in-out";
        undersideTekst.style.opacity = 1;
    
        undersideSection.style.transition = "transform 1s ease-in-out";
        undersideSection.style.transform = "translate(-100%)";
        
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
// setTimeout på en function som fjerne elementerne lavet af createElements
    setTimeout(() => {
        forsiden.removeChild(undersideSection);
    }, 2000); 
    
}


            
 
 

 });
 
 