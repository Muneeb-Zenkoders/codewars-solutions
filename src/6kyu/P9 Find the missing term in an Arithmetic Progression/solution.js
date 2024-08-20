// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

var findMissing = function (list) {  
    return ((list[0]+list[list.length-1])*(list.length+1))/2-list.reduce((a,b)=>a+b);
  }


//   https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript