// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    for(let i=0;i<numbers.length;i++){
      format = format.replace('x',numbers[i]);
    }
    return format;
  }

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript