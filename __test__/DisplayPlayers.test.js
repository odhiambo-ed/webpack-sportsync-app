/* eslint-disable */
import DisplayPlayers from '../src/js/ui/DisplayPlayers';

describe('DisplayPlayers', () => {
    let container;
    let displayPlayers;

    beforeEach(() => {
        document.body.innerHTML = '<div id="playersContainer"></div>';
        container = document.getElementById('playersContainer');
        displayPlayers = new DisplayPlayers();
    });

    it('should do nothing if no playersContainer element is found', () => {
        document.body.innerHTML = '';
        displayPlayers = new DisplayPlayers();

        const milestones = [{
            strMilestone: '100 Goals',
            strPlayer: 'John Doe',
            strTeam: 'FC Awesome',
            strMilestoneLogo: 'http://example.com/logo.png'
        }];

        displayPlayers.displayMilestones(milestones);
        expect(document.body.innerHTML).toBe('');
    });
});