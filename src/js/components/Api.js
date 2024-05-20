import axios from 'axios';

class SportsDataAPI {
  constructor() {
    this.baseURL = 'https://www.thesportsdb.com/api/v1/json/3/';
  }

  async getAllLeagues() {
    const response = await axios.get(`${this.baseURL}all_leagues.php`);
    return response.data.leagues;
  }

  async fetchTeams(page) {
    const response = await axios.get(`${this.baseURL}search_all_teams.php?l=English%20Premier%20League&page=${page}`);
    return response.data.teams;
  
  }

  async searchTeams(teamName) {
    const response = await axios.get(`${this.baseURL}searchteams.php?t=${teamName}`);
    return response.data.teams;
  }
}

export default SportsDataAPI;
