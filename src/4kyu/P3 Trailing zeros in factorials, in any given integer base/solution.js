// The factorial function is defined as follows:

// 0! = 1
// n! = 1 * 2 * 3 * 4 * ... * n-2 * n-1 * n
// Usually, the factorials of large numbers will have trailing zeroes. Your task is to create a function which returns the number of trailing zeroes of num! in a given base.

// Here's two examples to get you started:

// (num = 15, base = 10) => 3
// # 15! = 1307674368000, which has 3 trailing 0's

// (num = 7, base = 2) => 4
// # 7! = 5040 = 0b1001110110000, which has 4 trailing 0's
// Your code should be able to handle some very large numbers.

// Note:

// num >= 0
// base >= 2


function primeFactors(base) {
    const factors = new Map();
    let divisor = 2;
    while (base > 1) {
        let count = 0;
        while (base % divisor === 0) {
            base /= divisor;
            count++;
        }
        if (count > 0) {
            factors.set(divisor, count);
        }
        divisor++;
        if (divisor * divisor > base) {
            if (base > 1) {
                factors.set(base, 1);
            }
            break;
        }
    }

    return factors;
}

function countPrimeFactorInFactorial(num, prime) {
    let count = 0;
    let power = prime;
    while (num >= power) {
        count += Math.floor(num / power);
        power *= prime;
    }
    return count;
}

function trailingZeros(num, base) {
    const factors = primeFactors(base);
    let minZeros = Infinity;

    for (const [prime, exponent] of factors.entries()) {
        const primeCount = countPrimeFactorInFactorial(num, prime);
        minZeros = Math.min(minZeros, Math.floor(primeCount / exponent));
    }

    return minZeros;
}
// https://www.codewars.com/kata/544483c6435206617a00012c/train/javascript