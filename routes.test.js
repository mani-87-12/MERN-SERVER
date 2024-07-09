//routes.test.js
//jest test to test out http get method
// we will test if it contains all the parameters or not

//const { ApolloServer } = require('apollo-server-express');
const {app,StartServer}=require('./index');
//const typeDefs=require('./schema')
//const resolvers=require('./resolvers')
//to create http request we use supertest
const request=require('supertest')
let server;
beforeAll(async ()=>{
    server=await StartServer();
    //server=await new ApolloServer({typeDefs,resolvers})
})
/* afterAll(done=>{
    //server.close(done);
})  */
describe('GET /users',()=>{
    test('Get users from /user api',async ()=>{
       const response=await request(app).get('/user/users')
       .expect(201);
       console.log(response.body.getUsers[0])
       const data=response.body
       data.getUsers.forEach(user => {
            expect(user).toHaveProperty('id')
            expect(user).toHaveProperty('email')
       }); 
    })
}) 