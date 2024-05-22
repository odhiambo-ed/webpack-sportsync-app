// Import the main application class
import App from './js/app';
import './style/global.scss';
import './style/styles.scss';
import 'bootstrap';
import './style/bootstrap.scss';
import './style/display-events.scss';
import './style/display-players.scss';


// Wait for the DOM to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', () => {
  // Create a new instance of the App class
  const app = new App();

  // Initialize the app
  app.init();
});
