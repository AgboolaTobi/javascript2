
// let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,}$/;




// console.log(input, regex.test(input))


function validatePassword(password){
    if (password.length < 8){
        return false
    }
    let regex = /([a-z]+)([A-Z]+)([0-9]+)[@.#$!%*?&^]/;
    let result = regex.test(password)
    return result;
}

input = "eG4@3g453f"
console.log(validatePassword(input))