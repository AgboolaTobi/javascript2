const {mapper} = require("../Number2")

test("test that the value of scores increase by the added number i.e 5", ()=>{

    let question = [72,85,30,62,50,60,70,80,90,20];
    let result= mapper(question);
    let expected = [  77, 90, 35, 67, 55,65, 75, 85, 95, 25];

    expect(result).toEqual(expected);
})