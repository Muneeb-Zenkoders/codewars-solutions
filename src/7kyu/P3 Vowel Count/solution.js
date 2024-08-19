// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let digiarr = str.split('');
  let count = 0;
  for(let i=0;i<digiarr.length;i++){
    if(digiarr[i] === 'a'||digiarr[i] === 'e'||digiarr[i] === 'i'||digiarr[i] === 'o'||digiarr[i] === 'u') count++;
  }
  return count;
}

//   https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript