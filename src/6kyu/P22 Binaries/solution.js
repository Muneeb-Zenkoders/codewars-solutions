// Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be able to decode it.

// To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

// Coding process to code a number n expressed in base 10:
// For each digit d of n

// a) Let k be the number of bits of d

// b) Write k-1 times the digit 0 followed by the digit 1

// c) Write digit d as a binary string, with the rightmost bit being the least significant

// d) Concat the result of b) and c) to get the coding of d

// At last concatenate all the results got for the digits of n.

// An example
// So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

// With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

// Task:
// Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

// Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

// Examples:
// code("77338855") --> "001111001111011101110001100000011000001101001101"
// code("77338")  --> "0011110011110111011100011000"
// code("0011121314") --> "1010111111011011011111001100"

// decode("001111001111011101110001100000011000001101001101") -> "77338855"
// decode("0011110011110111011100011000") -> "77338"
// decode("1010111111011011011111001100") -> "0011121314"
// Notes
// SHELL: The only tested function is decode.
// Please could you ask before translating.

function code(strng) {
    function encodeDigit(digit) {
        const d = parseInt(digit, 10);
        let k;
        if (d < 2) {
            k = 1;
        } else if (d < 4) {
            k = 2;
        } else if (d < 8) {
            k = 3;
        } else {
            k = 4;
        }

        const prefix = '0'.repeat(k - 1) + '1';
        const binaryRepr = d.toString(2).padStart(k, '0');

        return prefix + binaryRepr;
    }

    return strng.split('').map(digit => encodeDigit(digit)).join('');
}
function decode(strng) {
    let result = '';
    let i = 0;

    while (i < strng.length) {
        let numZeros = 0;
        while (strng[i] === '0') {
            numZeros++;
            i++;
        }

        if (strng[i] === '1') {
            i++;
        } else {
            throw new Error("Invalid encoding format");
        }

        const k = numZeros + 1;
        const binaryRepr = strng.slice(i, i + k);
        const decimalDigit = parseInt(binaryRepr, 2);
        
        result += decimalDigit;
        i += k;
    }

    return result;
}

// https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/javascript