/* eslint-disable */
import DisplayTeams from '../src/js/ui/DisplayTeams';

describe('DisplayTeams', () => {
  let container;
  let displayTeams;

  beforeEach(() => {
    document.body.innerHTML = '<div id="teamsContainer" class="row"></div>';
    container = document.getElementById('teamsContainer');
    displayTeams = new DisplayTeams();
  });

  it('should display teams correctly with pagination', () => {
    const teams = [
      { strTeam: 'Team 1', strTeamBadge: 'badge1.png', strStadium: 'Stadium 1' },
      { strTeam: 'Team 2', strTeamBadge: 'badge2.png', strStadium: 'Stadium 2' },
      { strTeam: 'Team 3', strTeamBadge: 'badge3.png', strStadium: 'Stadium 3' },
      { strTeam: 'Team 4', strTeamBadge: 'badge4.png', strStadium: 'Stadium 4' },
      { strTeam: 'Team 5', strTeamBadge: 'badge5.png', strStadium: 'Stadium 5' },
      { strTeam: 'Team 6', strTeamBadge: 'badge6.png', strStadium: 'Stadium 6' },
      { strTeam: 'Team 7', strTeamBadge: 'badge7.png', strStadium: 'Stadium 7' }
    ];

    displayTeams.display(teams);

    const teamCards = container.getElementsByClassName('team-card');
    expect(teamCards.length).toBe(6); // Initially displays 6 teams

    const firstTeamCard = teamCards[0];
    expect(firstTeamCard.querySelector('.card-title').textContent).toBe('Team 1');
    expect(firstTeamCard.querySelector('.card-img-top').src).toContain('badge1.png');
    expect(firstTeamCard.querySelector('.card-text').textContent).toBe('Stadium 1');
  });

  it('should load more teams when "loadMore" is called', () => {
    const teams = [
      { strTeam: 'Team 1', strTeamBadge: 'badge1.png', strStadium: 'Stadium 1' },
      { strTeam: 'Team 2', strTeamBadge: 'badge2.png', strStadium: 'Stadium 2' },
      { strTeam: 'Team 3', strTeamBadge: 'badge3.png', strStadium: 'Stadium 3' },
      { strTeam: 'Team 4', strTeamBadge: 'badge4.png', strStadium: 'Stadium 4' },
      { strTeam: 'Team 5', strTeamBadge: 'badge5.png', strStadium: 'Stadium 5' },
      { strTeam: 'Team 6', strTeamBadge: 'badge6.png', strStadium: 'Stadium 6' },
      { strTeam: 'Team 7', strTeamBadge: 'badge7.png', strStadium: 'Stadium 7' }
    ];

    displayTeams.display(teams);
    displayTeams.loadMore();

    const teamCards = container.getElementsByClassName('team-card');
    expect(teamCards.length).toBe(7); // After loadMore, it displays 7 teams

    const lastTeamCard = teamCards[6];
    expect(lastTeamCard.querySelector('.card-title').textContent).toBe('Team 7');
    expect(lastTeamCard.querySelector('.card-img-top').src).toContain('badge7.png');
    expect(lastTeamCard.querySelector('.card-text').textContent).toBe('Stadium 7');
  });
});
