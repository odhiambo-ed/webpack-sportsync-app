class DisplaySports {
  constructor() {
    this.content = document.getElementById('main');
    this.leagues = [];
    this.itemsPerPage = 5;
    this.currentPage = 1;
  }

  display(leagues) {
    this.leagues = leagues;
    this.currentPage = 1;
    this.renderLeagues();
  }

  renderLeagues() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    const paginatedLeagues = this.leagues.slice(start, end);

    let output = '<h2>All Leagues</h2><ul>';
    paginatedLeagues.forEach(league => {
      output += `
        <li>
          <h3>${league.strLeague}</h3>
          <p>Sport: ${league.strSport}</p>
          <p>Alternate Names: ${league.strLeagueAlternate || 'N/A'}</p>
        </li>`;
    });
    output += '</ul>';

    if (end < this.leagues.length) {
      output += '<button id="loadMoreLeagues">Load More Leagues</button>';
    }

    this.content.innerHTML = output;
    this.addLoadMoreEvent();
  }

  addLoadMoreEvent() {
    const loadMoreBtn = document.getElementById('loadMoreLeagues');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMoreLeagues());
    }
  }

  loadMoreLeagues() {
    this.currentPage++;
    this.renderLeagues();
  }
}

export default DisplaySports;
