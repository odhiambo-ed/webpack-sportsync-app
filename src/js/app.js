import '../style/ui.scss';
import SportsDataAPI from './components/Api';
import DisplaySports from './ui/DisplaySports';
import DisplayTeams from './ui/DisplayTeams';
import DisplayPlayers from './ui/DisplayPlayers';
import DisplayEvents from './ui/DisplayEvents';
import DisplayLiveScores from './ui/DisplayLiveScores';
import ErrorHandling from './ui/ErrorHandling';

export default class App {
  constructor() {
    this.api = new SportsDataAPI();
    this.displaySports = new DisplaySports();
    this.displayTeams = new DisplayTeams();
    this.displayPlayers = new DisplayPlayers();
    this.displayEvents = new DisplayEvents();
    this.displayLiveScores = new DisplayLiveScores();
  }

  async init() {
    try {
      const leagues = await this.api.getAllLeagues();
      this.displaySports.display(leagues);
      this.setupLoadMoreTeams();
      this.setupPlayerFetch();
      this.setupEventFetch();
      this.setupLiveScores();
    } catch (error) {
      ErrorHandling.showError('Failed to load sports data. Please try again later.', 'main');
    }
  }

  async setupLoadMoreTeams() {
    const loadMoreButton = document.getElementById('loadMoreTeams');
    let currentPage = 1;

    const fetchAndDisplayTeams = async (page) => {
      try {
        const teams = await this.api.fetchTeams(page);
        this.displayTeams.display(teams);
      } catch (error) {
        ErrorHandling.showError('Failed to load teams. Please try again later.', 'main');
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

  async setupPlayerFetch() {
    try {
      const players = await this.api.fetchPlayers('133604');
      this.displayPlayers.display(players);
    } catch (error) {
      ErrorHandling.showError('Failed to load players. Please try again later.', 'main');
    }
  }

  async setupEventFetch() {
    try {
      const events = await this.api.fetchEvents('133604');
      this.displayEvents.display(events);
    } catch (error) {
      ErrorHandling.showError('Failed to load events. Please try again later.', 'main');
    }
  }

  async setupLiveScores() {
    try {
      const scores = await this.api.fetchLiveScores();
      this.displayLiveScores.display(scores);
    } catch (error) {
      ErrorHandling.showError('Failed to load live scores. Please try again later.', 'main');
    }
  }
}