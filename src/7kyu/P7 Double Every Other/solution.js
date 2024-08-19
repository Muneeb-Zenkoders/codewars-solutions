// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
    for(let i=1;i<a.length;i+=2)
    {
      a[i] = a[i]*2;
    }
    return a;
  }
//   https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript