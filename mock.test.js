//mock getData and Process the Mocked Data
//mock module
//('module url',arrow fn)
jest.mock('./test/utils',()=>({
    getData:jest.fn(),
}))

const {getData}=require('./test/utils')
const {processData}=require('./test/processData')
//we can mock the return value by using mockReturnValue

test('Mocked the process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data')
})