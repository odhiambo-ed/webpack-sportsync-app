import '../../css/ui.css';

class Ui {
  constructor() {
    this.content = document.getElementById('main');
    this.teamsContainer = document.getElementById('teamsContainer');
    this.leagues = [];
    this.itemsPerPage = 5;
    this.currentPage = 1;
  }

  displaySports(leagues) {
    this.leagues = leagues;
    this.currentPage = 1;
    this.renderLeagues();
  }

  renderLeagues() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    const paginatedLeagues = this.leagues.slice(start, end);

    let output = '<h2>All Leagues</h2><ul>';
    paginatedLeagues.forEach(league => {
      output += `
                <li>
                    <h3>${league.strLeague}</h3>
                    <p>Sport: ${league.strSport}</p>
                    <p>Alternate Names: ${league.strLeagueAlternate || 'N/A'}</p>
                </li>`;
    });
    output += '</ul>';

    if (end < this.leagues.length) {
      output += '<button id="loadMoreLeagues">Load More Leagues</button>';
    }

    this.content.innerHTML = output;
    this.addLoadMoreEvent();
  }

  addLoadMoreEvent() {
    const loadMoreBtn = document.getElementById('loadMoreLeagues');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMoreLeagues());
    }
  }

  loadMoreLeagues() {
    this.currentPage++;
    this.renderLeagues();
  }

  displayTeams(teams) {
    if (!this.teamsContainer) {
      // console.error("Teams container not found.");
      return;
    }

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
        </div>`;
      this.teamsContainer.appendChild(teamCard);
    });
  }

  showError(message) {
    this.content.innerHTML = `<div class="error">${message}</div>`;
  }
}

export default Ui;