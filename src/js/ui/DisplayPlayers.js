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
          <h6 class="mb-4">${milestone.strMilestone}</h6>
          <div class="d-flex flex-row justify-content-between">
              <div class="div">
                  <p>Player: ${milestone.strPlayer}</p>
                  <p>Team: ${milestone.strTeam}</p>
              </div>
              <img class="rounded-circle img-fluid" src="${milestone.strMilestoneLogo}" alt="${milestone.strMilestone}">
          </div>
        </li> <hr>`;
    });
    output += '</ul>';
    this.playersContainer.innerHTML = output;
  }
}

export default DisplayPlayers;
