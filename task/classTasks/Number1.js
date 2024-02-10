function scores(testScores){
     
    const view = testScores.filter((element) => element >= 70);
    

    return view;
}


let question = [72,85,30,62,50,60,70,80,90,20]
console.log(scores(question))


module.exports = {scores}