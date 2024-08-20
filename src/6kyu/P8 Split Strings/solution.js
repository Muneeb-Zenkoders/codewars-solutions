// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let arr = [];
     if(str.length%2==0){
       for(let i=0;i<str.length;i+=2){
         arr.push(str.charAt(i)+str.charAt(i+1));
       }
       console.log(arr);
       return arr;
     }
    else{
      for(let i=0;i<str.length-1;i+=2){
         arr.push(str.charAt(i)+str.charAt(i+1));
       }
      arr.push(str.charAt(str.length-1)+"_");
      return arr;
    }
  }


//   https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript