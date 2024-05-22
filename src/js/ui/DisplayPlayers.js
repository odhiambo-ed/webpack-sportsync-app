class DisplayPlayers {
  constructor() {
    this.playersContainer = document.getElementById('playersContainer');
  }

  display(players) {
    if (!this.playersContainer) return;

    let output = '<h2>Players</h2><ul>';
    players.forEach(player => {
      output += `
        <li>
          <h3>${player.strPlayer}</h3>
          <p>Position: ${player.strPosition}</p>
          <p>Nationality: ${player.strNationality}</p>
        </li>`;
    });
    output += '</ul>';
    this.playersContainer.innerHTML = output;
  }

  displayMilestones(milestones) {
    if (!this.playersContainer) return;

    let output = '<h2>Player Milestones</h2><ul>';
    milestones.forEach(milestone => {
      output += `
        <li>
          <h3>${milestone.strMilestone}</h3>
          <p>Player: ${milestone.strPlayer}</p>
          <p>Team: ${milestone.strTeam}</p>
          <p>Date: ${milestone.dateMilestone}</p>
          <img src="${milestone.strMilestoneLogo}" alt="${milestone.strMilestone}">
        </li>`;
    });
    output += '</ul>';
    this.playersContainer.innerHTML = output;
  }
}

export default DisplayPlayers;
