// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

function whatCentury(year)
{
  let number =  Math.ceil((parseInt(year))/100);
  if (number > 3 && number < 21) return number.toString()+"th";
  switch (number % 10) {
    case 1:
      return number.toString()+"st";
    case 2:
      return number.toString()+"nd";
    case 3:
      return number.toString()+"rd";
    default:
      return number.toString()+"th";
}
}

// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript