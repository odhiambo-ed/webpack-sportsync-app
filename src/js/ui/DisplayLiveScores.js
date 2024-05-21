class DisplayLiveScores {
    constructor() {
        this.content = document.getElementById('main');
    }

    display(scores) {
        if (!this.content) return;

        let output = '<h2>Live Scores</h2><ul>';
        scores.forEach(score => {
            output += `
        <li>
          <h3>${score.strTeam}</h3>
          <p>Score: ${score.intScore}</p>
        </li>`;
        });
        output += '</ul>';
        this.content.innerHTML = output;
    }
}

export default DisplayLiveScores;
