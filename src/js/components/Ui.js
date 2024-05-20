class Ui {
  constructor() {
    this.content = document.getElementById('main');
  }

  displayleagues(leagues) {
    let output = '<h2>All Leagues</h2><ul>';
    leagues.forEach(sport => {
      output += `<li>${sport.strSport}</li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
    
  showError(message) {
    this.content.innerHTML = `<div class="error">${message}</div>`;
  }
}

export default Ui;
