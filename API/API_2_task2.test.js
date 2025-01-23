
//task 2
const { headersAndParams } =require('./API_2_task2.cjs');

test ("Testing Request Headers and Params" , async () => {
   const data = await headersAndParams();
   console.log(data); 
   expect(data.requestHeaders['X-Custom-Header']).toBe('MyCustomValue');
   expect(data.requestHeaders['Content-Type']).toBe('application/json');
});