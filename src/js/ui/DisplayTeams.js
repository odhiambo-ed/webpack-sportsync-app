class DisplayTeams {
  constructor() {
    this.teamsContainer = document.getElementById('teamsContainer');
    this.teamsPerPage = 6;
    this.currentPage = 0;
    this.teams = [];
  }

  display(teams) {
    if (!this.teamsContainer) return;

    this.teams = teams;
    this.renderPage();
  }

  renderPage() {
    const start = this.currentPage * this.teamsPerPage;
    const end = start + this.teamsPerPage;
    const teamsToShow = this.teams.slice(start, end);

    teamsToShow.forEach(team => {
      const teamCard = document.createElement('div');
      teamCard.className = 'col-md-2 team-card animate__animated animate__fadeInUp';
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

  loadMore() {
    this.currentPage++;
    this.renderPage();
  }
}

export default DisplayTeams;