import '../../css/ui.css';
class Ui {
  constructor() {
    this.content = document.getElementById('main');
  }

  displaySports(leagues) {
    let output = '<h2>All Leagues</h2><ul>';
    leagues.forEach(league => {
      output += `
        <li>
          <h3>${league.strLeague}</h3>
          <p>Sport: ${league.strSport}</p>
          <p>Alternate Names: ${league.strLeagueAlternate || 'N/A'}</p>
        </li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
    
  showError(message) {
    this.content.innerHTML = `<div class="error">${message}</div>`;
  }
}

export default Ui;
