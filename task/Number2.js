function mapper(scores){
    const map1 = scores.map((element)=> element + 5 )
    return map1
}


module.exports = {mapper}

// let question = [72,85,30,62,50,60,70,80,90,20]
// console.log(mapper(question))