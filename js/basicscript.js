
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTest2(expected, found) {
    if (JSON.stringify(expected) == JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else return b;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    if (a > b & a > c) {
        return a
    } else if (b > a & b > c) {
        return b;
    } else return c
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(1,4,2) is 4  " + myFunctionTest(4, maxOfThree(1, 4, 2)));

//3.takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    a = a.toLowerCase()
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i <= vowels.length; i++) {
        if (a != vowels[i]) {
            continue
        }
        return true;
    }
    return false;
}

console.log("Expected output of isVowel(A) is TRUE  " + myFunctionTest(true, isVowel("A")));
console.log("Expected output of isVowel(D) is FAIL  " + myFunctionTest(false, isVowel("D")));

//4. sums and multiplies (respectively) all the numbers in an array of numbers
function sum(a) {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i]
    }
    return total;
}

function multiply(a) {
    var total = 1;
    for (var i = 0; i < a.length; i++) {
        total *= a[i]
    }
    return total;
}

console.log("Expected output of sum [1, 2, 3, 4] is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply [2,3,4] is 24  " + myFunctionTest(24, multiply([2, 3, 4])));

//5.computes the reversal of a string
function reverse(a) {
    var b = "";
    for (var i = a.length - 1; i >= 0; i--) {
        b += a[i]
    }
    return b;
}

console.log("Expected output of reverse [jag testar] is ratset gaj  " + myFunctionTest("ratset gaj", reverse("jag testar")));

// 6.takes an array of words and returns the length of the longest one.
function findLongestWord(a) {
    var longest = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].length > longest) {
            longest = a[i].length;
        }
    }
    return longest;
}

console.log("Expected output of the longest [123,12345,12,123456] is 6 " + myFunctionTest(6, findLongestWord(["123", "12345", "12", "123456"])));

//7.takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(a, i) {
    var longest = [];
    for (var k = 0; k < a.length; k++) {
        if (a[k].length > i) {
            longest[longest.length] = a[k]
        }
    }
    return longest;
}

console.log("Expected output of arrays [123,12345,12,123456] and 4 are 12345,123456 " + myFunctionTest2(["12345", "123456"], filterLongWords(["123", "12345", "12", "123456"], 4)));
//8.Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
// a) multiply each element by 10;
// b) return array with all elements equal to 3;
// c) return the product of all elements;
//
const a = [1, 3, 5, 3, 3];
const b = a.map(elem => elem * 10);
const c = a.filter(elem => elem == 3)
const d = a.reduce((product, elem) => product * elem);

console.log("Expected output of array [1, 3, 5, 3, 3] multiply each element by 10 is [10, 30, 50, 30, 30]  " + myFunctionTest2([10, 30, 50, 30, 30], b));
console.log("Expected output of array [1, 3, 5, 3, 3] return array with all elements equal to 3 is [3, 3, 3]  " + myFunctionTest2([3, 3, 3], c));
console.log("Expected output of array [1, 3, 5, 3, 3] return the product of all elements is 135  " + myFunctionTest2(135, d));