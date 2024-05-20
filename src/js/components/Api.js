import axios from 'axios';

class SportsDataAPI {
  constructor() {
    this.baseURL = 'https://www.thesportsdb.com/api/v1/json/3/';
  }
  async getAllLeagues() {
    const response = await axios.get(`${this.baseURL}all_leagues.php`);
    return response.data.leagues;
  }


  async searchTeams(teamName) {
    const response = await axios.get(`${this.baseURL}searchteams.php?t=${teamName}`);
    return response.data.teams;
  }
}

export default SportsDataAPI;
