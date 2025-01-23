const { requestWrongURL } = require('./API_2.cjs');
//const { headersAndParams } =require('./API_2.cjs');

//task 1
test ("Handles error correctly", async () => {
   const wrongURL = await requestWrongURL();
   expect(wrongURL).toMatch(/^Error:/);
});
