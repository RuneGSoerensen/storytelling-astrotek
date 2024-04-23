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