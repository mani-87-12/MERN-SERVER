//async.js
//how we can perform unit test on async functions

function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },100)
}
function myData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },100)
}
//calls admin after 4seconds
module.exports={fetchData,myData}