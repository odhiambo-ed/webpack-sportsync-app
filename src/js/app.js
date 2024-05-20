// Import necessary modules
import SportsDataAPI from './components/Api';
import Ui from './components/Ui';
import '../css/styles.css';
class App {
  constructor() {
    this.api = new SportsDataAPI();
    this.ui = new Ui();
  }

  // Initialize the app
  async init() {
    try {
      const sports = await this.api.getAllSports();
      this.ui.showSports(sports);
    } catch (error) {
      console.error('Error fetching sports data:', error);
      this.ui.showError('Failed to load sports data. Please try again later.');
    }
  }
}

export default App;
