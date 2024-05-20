import axios from 'axios';

class SportsDataAPI {
    constructor() {
        this.apiKey = '3';
        this.baseURL = 'https://www.thesportsdb.com/api/v1/json/3/';
    }
    async getAllSports() {
        const response = await axios.get(`${this.baseURL}all_sports.php`);
        return response.data.sports;
    }


    async searchTeams(teamName) {
        const response = await axios.get(`${this.baseURL}searchteams.php?t=${teamName}`);
        return response.data.teams;
    }
}

export default SportsDataAPI;
