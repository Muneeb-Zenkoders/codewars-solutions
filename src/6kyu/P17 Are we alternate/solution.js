// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true

function isAlt(word) {
    const vowels = 'aeiou';
    function isVowel(char) {
        return vowels.includes(char.toLowerCase());
    }
    for (let i = 0; i < word.length - 1; i++) {
        const currentCharIsVowel = isVowel(word[i]);
        const nextCharIsVowel = isVowel(word[i + 1]);
        
        if (currentCharIsVowel === nextCharIsVowel) {
            return false; 
        }
    }
    
    return true; 
}

// https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript