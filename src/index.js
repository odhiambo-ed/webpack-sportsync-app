// Import the main application class
import App from './js/app';
import './css/global.css';
import './css/styles.css';

// Wait for the DOM to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', () => {
  // Create a new instance of the App class
  const app = new App();

  // Initialize the app
  app.init();
});
