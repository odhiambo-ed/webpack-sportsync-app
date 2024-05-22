class DisplayPlayers {
  constructor() {
    this.playersContainer = document.getElementById('playersContainer');
  }

  displayMilestones(milestones) {
    if (!this.playersContainer) return;

    let output = '<ul>';
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
