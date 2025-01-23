const axios=require('axios');

jest.mock('axios');

describe ('Mock test', () => {
    test ('Mock test', async ()=>{
        const newData={data:'New'};
        axios.get.mockResolvedValue(newData);
        const response=await axios.get('https://jsonplaceholder.typicode.com');
        console.log(response);
    })

});