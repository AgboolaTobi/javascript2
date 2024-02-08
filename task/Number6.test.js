const {expenseTracker} = require("./Number6");

test("test that the total amount spent is calculated" ,()=>{
    
    let myObj = {
        "groceries" : 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    }

    let result = expenseTracker(myObj);

    let answer = 380;
    expect(result).toEqual(answer);

})