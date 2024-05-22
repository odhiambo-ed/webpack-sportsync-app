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
    this.displaySportsInstance = new DisplaySports();
    this.displayTeams = new DisplayTeams();
    this.displayPlayers = new DisplayPlayers();
    this.displayEvents = new DisplayEvents();
    this.displayLiveScores = new DisplayLiveScores();
  }

  async init() {
    try {
      await this.displaySports();
      this.setupLoadMoreTeams();
      this.setupPlayerMilestonesFetch();
      this.setupEventHighlightsFetch();
      this.setupLiveScores();
    } catch (error) {
      console.error('Initialization error:', error); // eslint-disable-line no-console
      ErrorHandling.showError('Failed to initialize the application. Please try again later or refresh the page.');
    }
  }

  async displaySports() {
    try {
      const leagues = await this.api.getAllLeagues();
      console.log('Fetched leagues:', leagues); // eslint-disable-line no-console
      this.displaySportsInstance.display(leagues);
    } catch (error) {
      console.error('Failed to load sports data:', error); // eslint-disable-line no-console
      ErrorHandling.showError('Failed to load sports data. Please try again later.');
    }
  }

  async setupLoadMoreTeams() {
    const loadMoreButton = document.getElementById('loadMoreTeams');
    let currentPage = 1;

    const fetchAndDisplayTeams = async (page) => {
      try {
        const teams = await this.api.fetchTeams(page);
        console.log('Fetched teams for page', page, ':', teams); // eslint-disable-line no-console
        this.displayTeams.display(teams);
      } catch (error) {
        console.error('Failed to load teams for page', page, ':', error); // eslint-disable-line no-console
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

  async setupPlayerMilestonesFetch() {
    try {
      const milestones = await this.api.fetchPlayerMilestones('34161397'); // Player ID for Richarlison
      console.log('Fetched player milestones:', milestones); // eslint-disable-line no-console
      this.displayPlayers.displayMilestones(milestones);
    } catch (error) {
      console.error('Failed to load player milestones:', error); // eslint-disable-line no-console
      ErrorHandling.showError('Failed to load player milestones. Please try again later.', 'main');
    }
  }

  async setupEventHighlightsFetch() {
    try {
      const eventHighlights = await this.api.fetchEventHighlights('4329'); // English League Championship
      console.log('Fetched event highlights:', eventHighlights); // eslint-disable-line no-console
      this.displayEvents.display(eventHighlights);
    } catch (error) {
      console.error('Failed to load event highlights:', error); // eslint-disable-line no-console
      ErrorHandling.showError('Failed to load event highlights. Please try again later.', 'main');
    }
  }

  async setupLiveScores() {
    try {
      const scores = await this.api.fetchLiveScores();
      console.log('Fetched live scores:', scores); // eslint-disable-line no-console
      this.displayLiveScores.display(scores);
    } catch (error) {
      console.error('Failed to load live scores:', error); // eslint-disable-line no-console
      ErrorHandling.showError('Failed to load live scores. Please try again later.', 'main');
    }
  }
}