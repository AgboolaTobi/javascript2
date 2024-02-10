const {square} = require("../Number3")

test("test that the value of scores increase by the added number i.e 5", ()=>{

    let question = [2,4,6,8,10];
    let result= square(question);
    let expected = [4, 16, 36, 64, 100];

    expect(result).toEqual(expected);
})