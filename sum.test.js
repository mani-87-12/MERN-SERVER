// we write test cases for our unit sum function

const sum=require('./test/sum')

//to write test function we use test()
//test() takes 2 arguments 1.label 2.function

test("1+2=3",()=>{
    expect(sum(1,2)).toBe(3);
    //toBe() for exactly equal
    //expect()-> to execute our unit
})
test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})
test('Value is null',()=>{
    const n=null
    //const n=1
   // expect(n).toBe(null)
    expect(n).toBeNull()
})
//toBeDefined()->value or var is defined or not used to check url is defined or not
test('value is defined',()=>{
    const a=1;
    expect(a).toBeDefined()
   // expect(b).toBeDefined()
})
//toBeTruthy()-.received value should be true
//similar toBeFalsy
test('value is truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy()
})
