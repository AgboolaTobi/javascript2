function character_frequency(words){
    let result = {}

    for (const word of words) {
       
            if(words[word] = words.key){
                result[word] += 1;
            }
            else{
                result[word] = 1
            }
    
    }

    // for character in words:
    //     if character in result.keys():
    //         result[character] += 1
    //     else:
    //         result[character] = 1
    return result
}

module.exports = {character_frequency}

let question = "semicolon.africa"

console.log(character_frequency(question))