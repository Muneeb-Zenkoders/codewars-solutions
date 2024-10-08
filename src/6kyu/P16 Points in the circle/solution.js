// You have the radius of a circle with the center in point (0,0).

// Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.

// Example: for radius = 2 the result should be 13.

// 0 <= radius <= 1000

function pointsNumber(radius) {
    let count = 0;
  
    for (let x = -radius; x <= radius; x++) {
      for (let y = -radius; y <= radius; y++) {
        if (x * x + y * y <= radius * radius) {
          count++;
        }
      }
    }
  
    return count;
  }

  
//   https://www.codewars.com/kata/5b55c49d4a317adff500015f/train/javascript
  