const {character_frequency} = require("./CharacterFrequency")

test("test for character frequency",()=>{
    let word = "semicolon.africa";
    let result = character_frequency(word);
    let answer = {
        s: 1,e: 1,m: 1,i: 1,c: 1,o: 1,l: 1,n: 1,'.': 1,a: 1,f: 1,r: 1}
    expect(result).toEqual(answer)
})