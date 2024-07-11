const {StartServer}=require('./index')

StartServer().catch(err=>{
    console.log(err)
})