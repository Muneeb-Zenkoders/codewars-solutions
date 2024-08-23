// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

function perimeter(n) {
    let a = 1, b = 1, sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += a; 
        let c = a + b; 
        a = b; 
        b = c; 
    }

    return sum * 4;
}

// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript