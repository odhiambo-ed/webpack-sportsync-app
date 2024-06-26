import axios from 'axios';

class SportsDataAPI {
  constructor() {
    this.baseURL = 'https://www.thesportsdb.com/api/v1/json/3/';
  }

  async getAllLeagues() {
    const response = await axios.get(`${this.baseURL}search_all_leagues.php?c=England&s=Soccer`);
    return response.data.countries;
  }

  async fetchTeams(page) {
    const response = await axios.get(`${this.baseURL}search_all_teams.php?l=English%20Premier%20League&page=${page}`);
    return response.data.teams;
  }

  async searchTeams(teamName) {
    const response = await axios.get(`${this.baseURL}searchteams.php?t=${teamName}`);
    return response.data.teams;
  }

  async fetchLiveScores() {
    const response = await axios.get(`${this.baseURL}latestsoccer.php`);
    return response.data.teams.Match;
  }

  async fetchEventHighlights(leagueId) {
    const response = await axios.get(`${this.baseURL}eventshighlights.php?i=${leagueId}`);
    return response.data.tvhighlights;
  }

  async fetchPlayerMilestones(playerId) {
    const response = await axios.get(`${this.baseURL}lookupmilestones.php?id=${playerId}`);
    return response.data.milestones;
  }
}

export default SportsDataAPI;
