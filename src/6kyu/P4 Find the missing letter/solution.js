// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array)
{
  let start = array[0].charCodeAt();
  for(i in array)
    {
      let val = array[i].charCodeAt();
      console.log(val);
      if(val==start)
        {
          console.log(start);
          start++;
          continue;
        }
      return String.fromCharCode(((array[i].charCodeAt())-1));
    }
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript