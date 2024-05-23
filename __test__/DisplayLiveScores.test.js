/* eslint-disable */
import DisplayLiveScores from '../src/js/ui/DisplayLiveScores';

describe('DisplayLiveScores', () => {
    let container;
    let displayLiveScores;

    beforeEach(() => {
        document.body.innerHTML = '<div id="live"></div>';
        container = document.getElementById('live');
        displayLiveScores = new DisplayLiveScores();
    });

    it('should display live scores correctly', () => {
        const scores = [{
            HomeTeam: 'Team A',
            AwayTeam: 'Team B',
            Date: '2024-05-22T14:00:00Z',
            League: 'Premier League',
            Round: '1',
            Time: '14:00',
            Location: 'Stadium A',
            Stadium: 'Main Stadium',
            HomeGoals: 2,
            AwayGoals: 1,
            HomeGoalDetails: 'Player 1, Player 2',
            AwayGoalDetails: 'Player 3'
        }];

        displayLiveScores.display(scores);

        const expectedOutput = `
      <ul>
        <li>
          <h3>Team A vs Team B</h3>
          <p>Date: ${new Date(scores[0].Date).toLocaleString()}</p>
          <p>League: Premier League</p>
          <p>Round: 1</p>
          <p>Time: 14:00</p>
          <p>Location: Stadium A</p>
          <p>Stadium: Main Stadium</p>
          <p>Score: Team A 2 - 1 Team B</p>
          <p>Goal Details:</p>
          <ul>
            <li>Home Goals: Player 1, Player 2</li>
            <li>Away Goals: Player 3</li>
          </ul>
        </li></ul>`;

        expect(container.innerHTML.trim().replace(/\s+/g, ' ')).toBe(expectedOutput.trim().replace(/\s+/g, ' '));
    });

    it('should do nothing if no content element is found', () => {
        document.body.innerHTML = '';
        displayLiveScores = new DisplayLiveScores();

        const scores = [{
            HomeTeam: 'Team A',
            AwayTeam: 'Team B',
            Date: '2024-05-22T14:00:00Z',
            League: 'Premier League',
            Round: '1',
            Time: '14:00',
            Location: 'Stadium A',
            Stadium: 'Main Stadium',
            HomeGoals: 2,
            AwayGoals: 1,
            HomeGoalDetails: 'Player 1, Player 2',
            AwayGoalDetails: 'Player 3'
        }];

        displayLiveScores.display(scores);
        expect(document.body.innerHTML).toBe('');
    });
});