const task = function(array){

    for(let count = 0; count < array.length ; count++){
        for(let counter = 0; counter < array[count]; counter++){
            if(array[counter] = 0){
                array[0] = array[counter]
            }
        }
    }
    return array;
    
}


input = [[0,5],[2,3]]

console.log(task(input))



