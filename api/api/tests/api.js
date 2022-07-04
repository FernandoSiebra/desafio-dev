require('dotenv').config();
const axios = require("axios");
const apiURL = "http://localhost:3001";
const api = axios.create({
  baseURL: apiURL
});

module.exports = api;

