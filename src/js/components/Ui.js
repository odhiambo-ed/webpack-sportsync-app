class Ui {
  constructor() {
    this.content = document.getElementById('content');
  }

  displaySports(sports) {
    let output = '<h2>All Sports</h2><ul>';
    sports.forEach(sport => {
      output += `<li>${sport.strSport}</li>`;
    });
    output += '</ul>';
    this.content.innerHTML = output;
  }
}

export default Ui;
