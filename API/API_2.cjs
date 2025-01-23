const axios = require('axios');

//task 1
const requestWrongURL = async() => {
    try {
        await axios.get('http://invalid-url');
        }

    catch (error) {
        return `Error: ${error.message}`;
    }
};
module.exports = { requestWrongURL };
