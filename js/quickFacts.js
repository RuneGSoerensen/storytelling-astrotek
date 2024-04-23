// Function to fetch JSON data from a file
function fetchContent() {
    fetch('../json/planeter.json') 
        .then(response => response.json())
        .then(data => {
            // Populate paragraphs with the retrieved data
            Object.keys(data).forEach(planetName => {
                document.querySelector(`.information-icons .${planetName} .temperature`).textContent = data[planetName].temperature;
                document.querySelector(`.information-icons .${planetName} .kredsloeb`).textContent = data[planetName].kredsloeb;
                document.querySelector(`.information-icons .${planetName} .timeOnPlanet`).textContent = data[planetName].timeOnPlanet;
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Call the fetchContent function to fetch and populate the content
fetchContent();
