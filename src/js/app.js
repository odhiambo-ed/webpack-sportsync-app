import SportsDataAPI from './components/Api';
import Ui from './components/Ui';
import '../css/styles.css';

class App {
  constructor() {
    this.api = new SportsDataAPI();
    this.ui = new Ui();
  }

  async init() {
    const sports = await this.api.getAllSports();
    this.ui.showSports(sports);
  }
}

const app = new App();
app.init();
