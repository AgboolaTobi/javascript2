function objectMaker(array1,array2){

let obj = [];
let count = 0;
for (const each of array1) {
    obj.push({[array1[count]] : array2[count]})
    count++;
}

return obj;
}


module.exports = {objectMaker}

