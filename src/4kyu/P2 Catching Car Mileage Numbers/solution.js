// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.


function isInteresting(number, awesomePhrases) {
    if(number>99){
        if(checkUnique(number)||endingwithzeros(number)||sequencialincrementing(number)||sequencialdecrementing(number)||palindrome(number)||consist(number,awesomePhrases)){
            return 2;
        }
        else if(consist(number+1,awesomePhrases)||consist(number+2,awesomePhrases)){
            return 1;
        }
        else if(checkUnique(number+1)||endingwithzeros(number+1)||sequencialincrementing(number+1)||sequencialdecrementing(number+1)||palindrome(number+1)||consist(number+1,awesomePhrases)){
            return 1;
        }
        else if(checkUnique(number+2)||endingwithzeros(number+2)||sequencialincrementing(number+2)||sequencialdecrementing(number+2)||palindrome(number+2)||consist(number+2,awesomePhrases)){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
        if(number==98||number==99) return 1;
        return 0;
    }
}
function checkUnique(number){
        const numStr = number.toString();
        const uniqueDigits = new Set(numStr);
        return uniqueDigits.size === 1;
}
function endingwithzeros(number){
    return number%100==0? true:false;
}
function sequencialincrementing(num) {
    const str = num.toString();
    for (let i = 1; i < str.length; i++) {
      let prevDigit = parseInt(str[i - 1], 10);
      let currDigit = parseInt(str[i], 10);
      if (currDigit !== (prevDigit + 1) % 10) {
        return false; // Not sequentially incrementing
      }
    }
    
    return true;
  }
function sequencialdecrementing(num) {
    const str = num.toString();
    
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== (str[i - 1] - 1).toString()) {
        return false; 
      }
    }
    
    return true;
  }
function palindrome(number) {
    let str = Math.abs(number).toString();
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
function consist(number, awesomePhrases){
    if(awesomePhrases.includes(number)){
        return true;
    }
    else{
        return false;
    }
}

// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript