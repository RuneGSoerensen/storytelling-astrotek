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
function fetchPlanetData() {
    fetch('../json/planeter.json')
        .then(response => response.json())
        .then(data => {
            // Iterate over each planet's data
            Object.keys(data).forEach(planetName => {
                const planetData = data[planetName];
                
                // Populate paragraphs with the fetched data
                const planetSection = document.getElementById(planetName);
                if (planetSection) {
                    const paragraphs = planetSection.querySelectorAll('.information-icons p');
                    paragraphs.forEach(paragraph => {
                        const dataType = paragraph.classList[0]; // Get the data type (e.g., kredsloeb, timeOnPlanet, temperature)
                        paragraph.textContent = planetData[dataType]; // Populate paragraph with the corresponding data
                    });
                }
            });
        })
        .catch(error => console.error('Error fetching planet data:', error));
}

// Call the fetchPlanetData function to fetch and populate the content
fetchPlanetData();

