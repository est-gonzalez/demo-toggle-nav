// js code to trigger the button goes here
// Step 1: Query(search) the document and select the element the user will click on to make the nav show and hide
const button = document.querySelector('.hamburger-btn');

// Step 2: place a click event on the button.
button.addEventListener('click', () => {
    // when the button is clicked, grab the nav element and add the special class
    document.querySelector('nav').classList.toggle('show-nav');
});

// Note: when placing a class name inside the classlist method, do not include the Period. It will already expect a class name 