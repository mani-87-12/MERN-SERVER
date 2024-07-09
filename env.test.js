let dataSets=[]
//execute my env beforeall
beforeAll(()=>{
    dataSets=['raju','ram','ravi','gopi']
})
beforeEach(()=>{
    console.log('Before Each Setup is called')
})
afterEach(()=>{
    console.log('After Each Setup is called')
})
afterAll(()=>{
    dataSets=[]
})

test("Test Case",()=>{
    expect(dataSets.length).toBe(4)
})
test("Dataset contains ",()=>{
    expect(dataSets).toContain('gopi')
})
test("Dataset conatains",()=>{
    expect(dataSets).toContain('ravi')
})