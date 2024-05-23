/* eslint-disable */

import DisplaySports from '../src/js/ui/DisplaySports';

describe('DisplaySports', () => {
  let displaySports;
  let container;

  beforeEach(() => {
    // Mocking document.createElement and document.getElementById
    document.createElement = jest.fn(() => ({
      innerHTML: '',
      addEventListener: jest.fn()
    }));
    document.getElementById = jest.fn(() => ({
      innerHTML: '',
      addEventListener: jest.fn(),
      click: jest.fn()
    }));

    container = {
      innerHTML: '',
      addEventListener: jest.fn()
    };

    displaySports = new DisplaySports();
    displaySports.content = container;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display leagues correctly with pagination', () => {
    const leagues = [
      { strLeague: 'League 1', strSport: 'Soccer', strLeagueAlternate: 'L1', strBadge: 'badge1.png' },
      { strLeague: 'League 2', strSport: 'Soccer', strLeagueAlternate: 'L2', strBadge: 'badge2.png' },
      { strLeague: 'League 3', strSport: 'Soccer', strLeagueAlternate: 'L3', strBadge: 'badge3.png' },
      { strLeague: 'League 4', strSport: 'Soccer', strLeagueAlternate: 'L4', strBadge: 'badge4.png' }
    ];

    displaySports.display(leagues);

    expect(container.innerHTML).toContain('League 1');
    expect(container.innerHTML).toContain('League 2');
    expect(container.innerHTML).toContain('League 3');
    expect(container.innerHTML).toContain('<button id="loadMoreLeagues"');
  });

  it('should load more leagues when "Load More Leagues" button is clicked', () => {
    const leagues = [
      { strLeague: 'League 1', strSport: 'Soccer', strLeagueAlternate: 'L1', strBadge: 'badge1.png' },
      { strLeague: 'League 2', strSport: 'Soccer', strLeagueAlternate: 'L2', strBadge: 'badge2.png' },
      { strLeague: 'League 3', strSport: 'Soccer', strLeagueAlternate: 'L3', strBadge: 'badge3.png' },
      { strLeague: 'League 4', strSport: 'Soccer', strLeagueAlternate: 'L4', strBadge: 'badge4.png' }
    ];

    displaySports.display(leagues);

    // Simulate button click
    displaySports.loadMoreLeagues();

    expect(displaySports.currentPage).toBe(2);
    expect(container.innerHTML).toContain('League 4');
  });
});
