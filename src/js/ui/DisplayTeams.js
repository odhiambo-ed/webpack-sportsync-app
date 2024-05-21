class DisplayTeams {
  constructor() {
    this.teamsContainer = document.getElementById('teamsContainer');
  }

  display(teams) {
    if (!this.teamsContainer) return;

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
}

export default DisplayTeams;
