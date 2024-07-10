/* const mongoose=require('mongoose')


describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://gopalreddytheluckier:zS0pf0c0UJGVF77W@cluster0.mazavb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url)
    })
    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})

 */

const mongoose = require('mongoose');

describe('MongoDB connected', () => {
    beforeAll(async () => {
        const url = 'mongodb+srv://gopalreddytheluckier:zS0pf0c0UJGVF77W@cluster0.mazavb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        try {
            await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection failed:', error);
        }
    }, 30000); // Increase timeout to 30 seconds

    test('should be connected to MongoDB server', () => {
        expect(mongoose.connection.readyState).toBe(1); // 1 indicates connected
    });
});
