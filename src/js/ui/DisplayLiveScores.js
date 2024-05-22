class DisplayLiveScores {
  constructor() {
    this.content = document.getElementById('live');
  }

  display(scores) {
    if (!this.content) return;

    let output = '<ul>';
    scores.slice(0,1).forEach(match => {
      output += `
        <li>
          <h3>${match.HomeTeam} vs ${match.AwayTeam}</h3>
          <p>Date: ${new Date(match.Date).toLocaleString()}</p>
          <p>League: ${match.League}</p>
          <p>Round: ${match.Round}</p>
          <p>Time: ${match.Time}</p>
          <p>Location: ${match.Location}</p>
          <p>Stadium: ${match.Stadium}</p>
          <p>Score: ${match.HomeTeam} ${match.HomeGoals} - ${match.AwayGoals} ${match.AwayTeam}</p>
          <p>Goal Details:</p>
          <ul>
            <li>Home Goals: ${match.HomeGoalDetails || 'N/A'}</li>
            <li>Away Goals: ${match.AwayGoalDetails || 'N/A'}</li>
          </ul>
        </li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
}

export default DisplayLiveScores;
