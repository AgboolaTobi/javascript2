function square(scores){
    const map1 = scores.map((element)=> element ** 2 )
    return map1
}

let question = [2,4,6,8,10];
console.log(square(question))

module.exports = {square}