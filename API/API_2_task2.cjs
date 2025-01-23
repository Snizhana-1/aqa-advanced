//task 2

const axios = require('axios');

const headersAndParams= async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{ 
            params : { userId:1 }, 
            headers: {
                'Content-Type': 'application/json',
                'X-Custom-Header': 'MyCustomValue',
            },
        });
        return { 
           requestHeaders : {
            'Content-Type': 'application/json',
            'X-Custom-Header': 'MyCustomValue',
           },
           serverHeaders : response.headers,
           data:response.data,
        };
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

module.exports = { headersAndParams };
