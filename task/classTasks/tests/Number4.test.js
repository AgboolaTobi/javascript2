const{objectMaker} = require("../Number4")


test("test that books are matched to members", ()=>{
    
let members = ["Emily", "Jack","Sophia","Daniel"];
let books = ["Face Of The Dead", "Dracula", "Love Over all", "Lost In Lust"];
let result = objectMaker(members,books)
let answer = [
    { Emily: 'Face Of The Dead' },
    { Jack: 'Dracula' },
    { Sophia: 'Love Over all' },
    { Daniel: 'Lost In Lust' }
  ]
  expect(result).toEqual(answer)

})