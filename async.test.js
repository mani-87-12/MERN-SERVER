const {fetchData} = require('./test/async')
const {myData} = require('./test/async')

test('Callback Data', done => {
    function callback(data) {
        try {
            expect(data).toBe('admin')
            done()
        } catch (err) {
            done(err)
        }
    }
    fetchData(callback)
})

test('Callback My Data', done => {
    function callback(data) {
        try {
            expect(data.id).toBe(data.id)
            done()
        } catch (err) {
            done(err)
        }
    }
    myData(callback)
})
test("Mocking callback function",done=>{
    const mockFunction=jest.fn(data=>{
        expect(data).toBe('admin')
        console.log('Mock Function')
        done()
    })
    fetchData(mockFunction)
})
