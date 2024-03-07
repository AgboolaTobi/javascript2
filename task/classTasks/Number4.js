function objectMaker(array1,array2){

let obj = [];
let count = 0;
for (const each of array1) {
    obj.push({[array1[count]] : array2[count]})
    count++;
}

return obj;
}


let members = ["Emily", "Jack","Sophia","Daniel"];
let books = ["Face Of The Dead", "Dracula", "Love Over all", "Lost In Lust"];

console.log(objectMaker(members, books))

module.exports = {objectMaker}

