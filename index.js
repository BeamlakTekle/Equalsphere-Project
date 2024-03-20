// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
   document.body.classList.toggle("dark-mode");

}


// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.


// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
let count = 3;


const addSignature = () => {
  // Get input values
  const name = document.getElementById("name").value;
  const address = document.getElementById("hometown").value;
 // const email = document.getElementById("email").value;
  
  // Create a paragraph element
  const para = document.createElement("p");
  
   
  

  // Set the text content for the paragraph
  const signature = "🖊️ " + name + " from " + address + " supports this.";

  para.textContent = signature;

  // Find the signatures section on the page
  const signaturesSection = document.querySelector('.signatures');

  // Append the paragraph to the signatures section
  signaturesSection.appendChild(para);

  // Update the counter
  const oldCounter = document.getElementById('counter');
  oldCounter.remove();
  count = count + 1;
  const newCounter = document.createElement('p');
  newCounter.id = 'counter';
  const newText = "🖊️ " + count + " people have signed this petition and support this cause." ;
  newCounter.textContent = newText;
  signaturesSection.appendChild(newCounter);

  toggleModal(name);
}



// Add a click event listener to the sign now button
//signNowButton.addEventListener("click", addSignature);



// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

function validateForm() {
    const petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
        name: petitionInputs.name.value,
        hometown: petitionInputs.hometown.value,
        email: petitionInputs.email.value.trim()
    };

    let containsErrors = false;

    for (let inputField in person) {
        if (person[inputField].length < 2) {
            containsErrors = true;
            petitionInputs[inputField].classList.add('error');
        } else {
            petitionInputs[inputField].classList.remove('error');
        }
    }

    if (!person.email.includes('@') || !person.email.includes('.')) {
        containsErrors = true;
        petitionInputs.email.classList.add('error');
    } else {
        petitionInputs.email.classList.remove('error');
    }

    if (!containsErrors) {
        addSignature(person);
        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = "";
        }
    }


}

  


signNowButton.addEventListener('click', validateForm);


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
    }

// Select all elements with the class 'revealable'
let revealableContainers = document.querySelectorAll('.revealable');

// Function to reveal elements
function reveal() {
  let windowHeight = window.innerHeight;

  // Loop through each revealable container
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    // Check if the container should be revealed
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // Add the 'active' class to the revealable container's classlist
      revealableContainers[i].classList.add('active');
    } else {
      // Remove the 'active' class from the revealable container's classlist
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Call the reveal function when the user scrolls
window.addEventListener('scroll', reveal);

// Function to reduce motion
function reduceMotion() {
  // Update animation object with new values
  animation.transition = 'none'; // Changing transition type to 'none'
  animation.revealDistance = 50; // Making the animation distance shorter
  animation.transitionDelay = '0.2s'; // Updating transition delay

  let revealableContainers = document.querySelectorAll('.revealable');

  // Loop through revealable containers
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = animation.transition;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
  }
}

// Event listener for the button
document.getElementById('reduceMotionButton').addEventListener('click', reduceMotion);



function toggleModal(person) {
  const modal = document.querySelector('#thanks-modal');
  const modalContent = document.querySelector('#thanks-modal-content');

  // Set the display style property of the entire modal to flex
  modal.style.display = 'flex';

  // Display a nice thank you message to the user
  modalContent.textContent = `Thank you so much ${person}!`;

  // Call scaleImage function every half a second and store the interval ID
  const intervalId = setInterval(scaleImage, 500); // Calls scaleImage every 500 milliseconds (half a second)

  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId); // Stop the animation by clearing the interval
  }, 4000);
}



let scaleFactor = 1; // Create a new variable outside of any functions called scaleFactor and set it to 1
const modalImage = document.querySelector('#thanks-modal img'); // Select the image within the modal

function scaleImage() { // Create a new function called scaleImage that takes no arguments
  // Toggle the image size between a factor of 1 and 0.8
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;

  // Apply the scaleFactor to the image using transform property
  modalImage.style.transform = `scale(${scaleFactor})`;
}


const closeModalButton = document.getElementById('close-modal-button');

function closeModal() {
  const modal = document.querySelector('#thanks-modal');
  modal.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);

