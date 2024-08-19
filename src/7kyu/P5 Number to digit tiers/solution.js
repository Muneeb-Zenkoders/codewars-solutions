//Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

function createArrayOfTiers(num) {
    let str = num.toString();
    let result = [];
    for(let i=1;i<=str.length;i++)
    {
        result.push(str.substring(0,i));
    }
    return result;
}

// https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript