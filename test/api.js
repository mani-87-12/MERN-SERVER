//test/api.js

async function fetchData(){
     //this will help when the project is in production phase
    return {getUsers:[{
        "id": "1",
        "name": "abc",
        "email": "abc@2mail.com",
        "password": "abck3"
    }]} 
   /*
      works only  when the server is live,when the code is in production phases it doesn't work
     try{
        const response=await fetch("http://localhost:3001/user/users")
        if(!response){
            throw new Error("Failed to fetch")
        }
        const data=response.json();
        return data;
    }catch(err){
        throw err
    }*/
} 

module.exports=fetchData