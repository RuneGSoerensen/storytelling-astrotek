document.addEventListener('DOMContentLoaded', function() {
    const informationWheel = document.querySelector('.information-wheel');

    // Fetch the JSON data from the file
    fetch('../json/planeter.json')
        .then(res => res.json())
        .then(planetData => {
            // Get the three images
            const images = document.querySelectorAll('.planet-icon');

            // Add event listeners to each image
            images.forEach((image, index) => {
                image.addEventListener('mouseover', () => {
                    // Clear the existing content in the informationWheel div
                    informationWheel.innerHTML = '';

                    // Create a <p> tag for each piece of data
                    const pTags = [
                        `Kredsløb: ${planetData[index].kredsløb}`,
                        `Time on Planet: ${planetData[index].timeOnPlanet}`,
                        `Temperature: ${planetData[index].temperature}`
                    ].map(text => {
                        const pTag = document.createElement('p');
                        pTag.classList.add('information-text'); // Add the information-text class
                        pTag.textContent = text;
                        return pTag;
                    });

                    // Append all <p> tags to the informationWheel div
                    pTags.forEach(pTag => {
                        informationWheel.appendChild(pTag);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});