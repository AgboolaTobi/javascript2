function expenseTracker(obj){
    let total = 0;
    for (const key in obj) {
            const element = obj[key];
            total += element;
        
    }

    return total;
}

module.exports = {expenseTracker};

// myObj = {
//     "groceries" : 150,
//     "dining out": 100,
//     "transportation": 50,
//     "entertainment": 80
// }


// console.log(expenseTracker(myObj))