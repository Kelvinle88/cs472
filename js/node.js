'use strict'
let arrayNumbers = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const question = () => {
    readline.question('Please input number/Exit for canceling: ', (input) => {
        if (input == "Exit") {
            console.log('total number:' + getNumber(arrayNumbers))
            readline.close()
        } else {
            console.log(`Your input number ${input}`)
            arrayNumbers.push(parseInt(input));
            question();
        }
    })
}
function getNumber(a) {
    return a.reduce((sum, ele) => sum + ele)

}

const main = async () => {
    await question();
}
main()
