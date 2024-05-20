import axios from 'axios';

class SportsDataAPI {
    constructor() {
        this.apiKey = '3';
        this.baseURL = 'https://www.thesportsdb.com/api/v1/json/3/';
    }
}

export default SportsDataAPI;
