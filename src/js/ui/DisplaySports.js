class DisplaySports {
  constructor() {
    this.content = document.getElementById('leaguesContainer');
    this.leagues = [];
    this.itemsPerPage = 3;
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

    let output = '<h2 class="animate__animated animate__fadeInUp text-uppercase">Top Leagues</h2><hr><ul class="d-flex flex-row justify-content-center">';
    paginatedLeagues.forEach(league => {
      output += `
        <li>
          <h5 class="text-uppercase">${league.strLeague}</h5>
          <p>Sport: ${league.strSport}</p>
          <p>Alternate Names: ${league.strLeagueAlternate || 'N/A'}</p>
          <img style="height: 100px" src="${league.strBadge}" alt="${league.strLeague}" />
        </li>`;
    });
    output += '</ul>';

    if (end < this.leagues.length) {
      output += '<div class="row"><button id="loadMoreLeagues" class="btn btn-primary mt-4 animate__animated animate__fadeInUp w-50 position-absolute start-50 translate-middle"> Load More Leagues</button></div>';
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