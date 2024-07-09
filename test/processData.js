const {getData}=require('./utils')

function processData(){
    return `Processed:${getData()}`;
    //should return real data

}
module.exports={processData}