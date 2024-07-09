const fetchData=require('./test/api')

//npm i node-fetch

jest.mock('node-fetch');

test("GET /users api data",async ()=>{
    const data=await fetchData();
    expect(data).toHaveProperty('getUsers');
    //test if all data has 4 parameters
    data.getUsers.forEach(user => {
        expect(user).toHaveProperty('password')
        expect(user).toHaveProperty('id')
    });
})