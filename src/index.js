// Import the main application class
import App from './js/app';
import './style/global.css';
import './style/styles.css';
import './style/display-events.css';
import './style/display-players.css';
import '@fontsource/poppins'; // Defaults to weight 400 with normal style.
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';


// Wait for the DOM to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', () => {
  // Create a new instance of the App class
  const app = new App();

  // Initialize the app
  app.init();
});
