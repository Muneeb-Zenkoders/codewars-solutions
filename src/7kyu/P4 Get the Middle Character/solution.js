function getMiddle(s)
{
  let len = s.length;
  console.log(len);
  let median;
  if(len%2==0){
    median = Math.floor((len+1)/2) - 1;
    let median2 = Math.ceil((len+1)/2) - 1;
    console.log(median2,median);
    return s.charAt(median) + s.charAt(median2);
  }
  else{
    median = ((len+1)/2)-1;
    return s.charAt(median);
  }
}