// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  let arrStart = start.split(".");
  let arrEnd = end.split(".");

  const startval = arrStart.map((n) => decimalToBinary(parseInt(n)));
  const endval = arrEnd.map((e) => decimalToBinary(parseInt(e)));

  let startstr = startval.join("");
  let endstr = endval.join("");

  let dec1 = bin2dec(startstr);
  let dec2 = bin2dec(endstr);

  return Math.abs(dec1 - dec2);
}

function decimalToBinary(N) {
  let binaryString = (N >>> 0).toString(2);
  while (binaryString.length < 8) {
    binaryString = '0' + binaryString;
  }
  return binaryString;
}

function bin2dec(bin) {
  return parseInt(bin, 2);
}

// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript