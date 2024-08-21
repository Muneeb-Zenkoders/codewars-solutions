// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
    const regex = /(\d+)/g;
    let match;
    let lastNumericPart = null;
    let lastIndex = -1;
    while ((match = regex.exec(string)) !== null) {
        lastNumericPart = match[1];
        lastIndex = match.index;
    }
    if (lastNumericPart === null) {
        return string + '1';
    }
    const incrementedNumericPart = (parseInt(lastNumericPart, 10) + 1).toString();
    const paddedIncrementedPart = incrementedNumericPart.padStart(lastNumericPart.length, '0');
    return string.slice(0, lastIndex) + paddedIncrementedPart + string.slice(lastIndex + lastNumericPart.length);
}

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript