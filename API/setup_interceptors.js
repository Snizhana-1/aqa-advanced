const axios=require('axios');

//creating an Axios instance
const apiInstence=axios.create ({
  baseURL:'https://jsonplaceholder.typicode.com',
  timeout:10000,
});

//adding the interceptor for request
apiInstence.interceptors.request.use (
    (config) => {
        console.log('Request:'); 
        console.log(`URL:${config.url}`); 
        console.log(`Method:${config.method}`); 
        console.log(`Headers:`, config.headers); 
          if (config.data) {
            console.log(`Data:`,config.data);
          }
         return config;
    }, 
    (error) => {
        console.error("An error occured while creating the request:",error.message);
        return Promise.reject(error);
    }
);

//adding the interceptor for response
apiInstence.interceptors.response.use (
    (response) => {
        console.log("Response:");
        console.log(`Status:${response.status}`);
        console.log(`Data:`,response.data);
        return response;
    },
    (error) => {
        if (error.response) {
              console.error("Error in the response from the server");
              console.error(` Status:${error.response.status}` );
              console.error(` Data:` ,error.response.data);
        } else {
            console.error("Error in request",error.message);
        }
      return Promise.reject(error);
    }
);
module.exports=apiInstence;