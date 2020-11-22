function isString(val) {
    if (typeof val === 'string') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isString("future sphere"))
console.log(isString(35))

function isBlank(val) {
    if (val.length === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isBlank(''))
console.log(isBlank("peter"))

function truncateString(input, index) {
    return input[index]
}
console.log(truncateString("Robin Hood", 4))
console.log(truncateString("peter", 2))

function stringParameterize(input) {
    let lowerInput = input.toLowerCase()
    let splitInput = lowerInput.split(' ')
    splitInput = splitInput.join('-')
    return splitInput
}
console.log(stringParameterize('Robin Hood from China'))
console.log(stringParameterize('United States Of America'))

function camelize(input) {
    let splitInput = input.split(' ')
    let firstWord = splitInput[0]
    splitInput[0] = firstWord[0].toLowerCase() + firstWord.slice(1)
    camelizedInput = splitInput.join('')
    return camelizedInput
}
console.log(camelize("Javascript Exercises"))
console.log(camelize("javascript Exercises"))
console.log(camelize("javascriptExercises"))

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}
function randomize(input1, input2) {
    let inputArray = range(input1, input2)
    return inputArray[Math.floor(Math.random()*inputArray.length)];
}
console.log(randomize(10, 15))


//couldn't get this to work
function myTrim(input) {
    let slice = input.slice(-1)
    let slice1 = input.slice(1)
    let slice2 = input.slice(0, -1)
    if (input[0] !== ' ' && slice !== ' ') {
        return input
    }
    else if (input[0] === ' ') {
        newInput = slice1
        myTrim(newInput)
    }
    else if (slice === ' '){
        newInput = slice2
        myTrim(newInput)

    }
    
}
console.log(myTrim(' Robin Hood from China '))