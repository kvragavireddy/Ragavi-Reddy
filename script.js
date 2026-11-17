
const typingText = document.getElementById("typing-text");

const phrases = [
    "a Medical student",
    "a BBA student"
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeAnimation() {

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent =
            currentPhrase.substring(0, characterIndex - 1);

        characterIndex--;
    } else {
        typingText.textContent =
            currentPhrase.substring(0, characterIndex + 1);

        characterIndex++;
    }

    let speed = isDeleting ? 55 : 110;

    // Pause after finishing a phrase
    if (!isDeleting && characterIndex === currentPhrase.length) {
        speed = 1500;
        isDeleting = true;
    }

    // Move to the next phrase after deleting
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;

        phraseIndex++;

        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }

        speed = 400;
    }

    setTimeout(typeAnimation, speed);
}

// Start the animation
typeAnimation();
