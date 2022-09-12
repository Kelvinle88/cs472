//4. sums and multiplies (respectively) all the numbers in an array of numbers
function sum(...a) {
    return a.reduce((total, ele) => {
        return total += ele
    })
}

function multiply(...a) {
    return a.reduce((total, ele) => {
        return total *= ele
    })
};

//5.computes the reversal of a string
function reverse(...a) {
    return a.reduce((x, y) => y.concat(x));
}


//7.takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(a, i) {
    return a.filter(x => x.length > i)
}
