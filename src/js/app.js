// src/js/app.js
import axios from 'axios';
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

  setupLoadMoreTeams() {
    const loadMoreButton = document.getElementById('loadMore');
    const teamsContainer = document.getElementById('teamsContainer');
    let currentPage = 1;

    async function fetchTeams(page) {
      try {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League&page=${page}`);
        const teams = response.data.teams;
        teams.forEach(team => {
          const teamCard = document.createElement('div');
          teamCard.className = 'col-md-3 team-card animate__animated animate__fadeInUp';
          teamCard.innerHTML = `
                        <div class="card">
                            <img src="${team.strTeamBadge}" class="card-img-top" alt="${team.strTeam}">
                            <div class="card-body">
                                <h5 class="card-title">${team.strTeam}</h5>
                                <p class="card-text">${team.strStadium}</p>
                            </div>
                        </div>
                    `;
          teamsContainer.appendChild(teamCard);
        });
      } catch (error) {
        // console.error('Error fetching teams:', error);
      }
    }

    loadMoreButton.addEventListener('click', () => {
      fetchTeams(currentPage);
      currentPage++;
    });

    loadMoreButton.click(); // Load first set of teams on page load
  }
}
