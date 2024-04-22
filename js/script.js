// Get the icon images and information paragraphs
const iconImages = document.querySelectorAll('.icon-container img');
const infoParagraphs = document.querySelectorAll('.information-icons p');

// Function to handle mouseover event
function handleMouseOver(index) {
    infoParagraphs[index].classList.add('visible');
}

// Function to handle mouseout event
function handleMouseOut(index) {
    infoParagraphs[index].classList.remove('visible');
}

// Add event listeners to each icon image
iconImages.forEach((image, index) => {
    image.addEventListener('mouseover', () => handleMouseOver(index));
    image.addEventListener('mouseout', () => handleMouseOut(index));
});
