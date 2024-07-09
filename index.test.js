const add=require('./index')

test('add 1+2 to 3',()=>{
    expect(add(1,2)).toBe(3)
})
test('add -1+-1 to +2',()=>{
    expect(add(1,-3)).toBe(-2)
})

/* //const process=require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('./schema')
const resolvers=require('./resolvers')
const cors=require('cors')
const session=require('express-session')
const app=express()
const port=3001
const url='mongodb+srv://gopalreddytheluckier:zS0pf0c0UJGVF77W@cluster0.mazavb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const userApiFromRouter=require('./routes/userRoutes')
app.use(express.json())
app.use(cors())

SESSION_SECRET='hT&k#V7$4@Wf2zY'

//const url = process.env.MONGODB_URI;
//const sessionSecret = process.env.SESSION_SECRET;
//console.log(url)
//console.log(sessionSecret)

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    //console.log('DB connected')
    })
.catch((err)=>{
    //console.log(err.message)
    })

const server=new ApolloServer({typeDefs,resolvers})

app.use("/user",userApiFromRouter)
async function StartServer(){
    await server.start();
    server.applyMiddleware({app})
    //app.listen(port,()=>{
    //    console.log(`Server is live on ${port}`)})
}

beforeAll(async ()=>{
  await StartServer();
})
//test my graphql server
// we will run our test cases before our server starts

test('GrapgQL server started and running',async ()=>{
    const res=await request(app)
    .post('/graphql').send({
        query:`
        query{
            __schema{
                queryType{
                name
                }
            }
        }
        `
    });
    expect(res.statusCode).toBe(200)
    expect(res.body.data.__schema.queryType.name).toBe('Query');
}) */