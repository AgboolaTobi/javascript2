const {shiftZeros}  = require("./TuesdayTask")


test("test that zeros are shifted",()=>{
    let input1 = [0,4,2,0,5];
    let result = shiftZeros(input1)

    let expected = [ 4, 2, 5, 0, 0 ]

    expect(result).toEqual(expected)
})

test("test that zeros are shifted again",()=>{
    let input2 = [4,0,0,5,7];
    let result = shiftZeros(input2)

    let expected = [ 4, 5, 7, 0, 0 ]

    expect(result).toEqual(expected)
})
