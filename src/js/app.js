import '../css/ui.css';
import SportsDataAPI from './components/Api';
import Ui from './components/Ui';

export default class App {
  constructor() {
    this.api = new SportsDataAPI();
    this.ui = new Ui();
  }

  async init() {
    try {
      const leagues = await this.api.getAllLeagues();
      this.ui.displaySports(leagues);
      this.setupLoadMoreTeams();
    } catch (error) {
      this.ui.showError('Failed to load sports data. Please try again later.');
    }
  }

  async setupLoadMoreTeams() {
    const loadMoreButton = document.getElementById('loadMoreTeams');
    let currentPage = 1;

    const fetchAndDisplayTeams = async (page) => {
      try {
        const teams = await this.api.fetchTeams(page);
        this.ui.displayTeams(teams);
      } catch (error) {
        this.ui.showError('Failed to load teams. Please try again later.');
      }
    };

    if (loadMoreButton) {
      loadMoreButton.addEventListener('click', () => {
        fetchAndDisplayTeams(currentPage);
        currentPage++;
      });
      loadMoreButton.click(); // Load first set of teams on page load
    }
  }
}