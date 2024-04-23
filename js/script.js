// Laver refferencer til iconImages og infoParagraphs
const iconImages = document.querySelectorAll('.icon-container img');
const infoParagraphs = document.querySelectorAll('.information-icons p');

// Funktionen håndtere mouseover
function handleMouseOver(index) {
    infoParagraphs[index].classList.add('visible');
}

// Funktionen håndtere mouseout
function handleMouseOut(index) {
    infoParagraphs[index].classList.remove('visible');
}

// Et foreach loop som fyre den rigtige funktion af.
iconImages.forEach((image, index) => {
    image.addEventListener('mouseover', () => handleMouseOver(index));
    image.addEventListener('mouseout', () => handleMouseOut(index));
});


// Function to fetch JSON data from a file
function fetchContent() {
    fetch('../json/planeter.json') 
        .then(response => response.json())
        .then(data => {
            // Populate paragraphs with the retrieved data
            document.querySelector('.information-icons .temperature').textContent = data.temperature;
            document.querySelector('.information-icons .kredsloebb').textContent = data.kredsloebb;
            document.querySelector('.information-icons .timeOnPlanet').textContent = data.timeOnPlanet;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Call the fetchContent function to fetch and populate the content
fetchContent();



