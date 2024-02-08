const {scores} = require("./Number1")

test("test that scores below 70 are filtered", ()=>{
    let question = [72,85,30,62,50,60,70,80,90,20];
    let result= scores(question);
    let expected = [ 72, 85, 70, 80, 90 ];

    expect(result).toEqual(expected);
})