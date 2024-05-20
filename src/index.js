import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import "./js/app";

// Function to create and append content to the #app div
function createAppContent() {
    // Access the div with id="app"
    const appDiv = document.getElementById('app');

    // Create an h1 element
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, Webpack!';

    // Create a p element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a basic Webpack setup.';

    // Append the heading and paragraph to the appDiv
    appDiv.appendChild(heading);
    appDiv.appendChild(paragraph);
}

createAppContent();
