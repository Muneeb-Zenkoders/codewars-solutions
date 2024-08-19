// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    if(n>=0){
      let str = n.toString();
      let digirarr = str.split('');
      for(let i=0;i<str.length-1;i++){
        for(let j=0;j<str.length-i-1;j++){
            if((parseInt(digirarr[j]))<(parseInt(digirarr[j+1])))
            {
                let temp = digirarr[j];
                digirarr[j] = digirarr[j+1];
                digirarr[j+1] = temp;
            }
        }
      }
      return n = parseInt(digirarr.join(''));
    }
  }

//   https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript