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
}

export default DisplayPlayers;
