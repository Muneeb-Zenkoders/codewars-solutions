// There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
    const frequency = {};
    for (const num of arr) {
      if (frequency[num]) {
        frequency[num]++;
      } else {
        frequency[num] = 1;
      }
    }
    for (const num in frequency) {
      if (frequency[num] === 1) {
        return Number(num);
      }
    }
  }
  
  // https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript