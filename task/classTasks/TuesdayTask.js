function shiftZeros(array){
    let zeros = [];
    let picks = [];

    array.forEach(element => {
        if(element != 0){
            picks.push(element)
        }

        else if(element == 0){
            zeros.push(element)
        }

    }

    
    );

    return picks.concat(zeros)
}



module.exports = {shiftZeros}

// sample = [0,4,2,0,5]

// console.log(shiftZeros(sample))


// sample2 = [4,0,0,5,7]
// console.log(shiftZeros(sample2))