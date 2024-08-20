// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

function hamming(a,b) {
	if(a.length!=b.length) return 0;
  let dist = 0;
  for (let i=0;i<a.length;i++)
    {
      if(a[i]!=b[i]) dist++;
    }
  return dist;
}

// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascripat