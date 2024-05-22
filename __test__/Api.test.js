/* eslint-disable */
import axios from 'axios';
import SportsDataAPI from '../src/js/components/Api';

jest.mock('axios');

describe('SportsDataAPI', () => {
  let api;

  beforeEach(() => {
    api = new SportsDataAPI();
  });

  it('should fetch all leagues', async () => {
    const leagues = { countries: [{ strLeague: 'Premier League' }] };
    axios.get.mockResolvedValue({ data: leagues });

    const result = await api.getAllLeagues();
    expect(result).toEqual(leagues.countries);
  });

  it('should fetch teams', async () => {
    const teams = { teams: [{ strTeam: 'Arsenal' }] };
    axios.get.mockResolvedValue({ data: teams });

    const result = await api.fetchTeams(1);
    expect(result).toEqual(teams.teams);
  });

  it('should fetch live scores', async () => {
    const scores = { teams: { Match: [{ HomeTeam: 'Arsenal', AwayTeam: 'Chelsea' }] } };
    axios.get.mockResolvedValue({ data: scores });

    const result = await api.fetchLiveScores();
    expect(result).toEqual(scores.teams.Match);
  });
});
