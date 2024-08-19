//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    let len = ending.length-1;
    if(len==-1) return true;
    for(let i=str.length-1;len>=0;i--)
      { 
        if(str.charAt(i)===ending.charAt(len))
        {
          len--;   
          if(len<0)
          {
            return true;
          }
        }
        else{
          return false;
        }
      }
  }

  //  https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript