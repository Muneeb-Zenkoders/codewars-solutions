// In information theory and computer science, the Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.

// (http://en.wikipedia.org/wiki/Levenshtein_distance)

// Your task is to implement a function which calculates the Levenshtein distance for two arbitrary strings.

function levenshtein(str1, str2) {
    let m = str1.length;
    let n = str2.length;

    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let cost = str1[i - 1] === str2[j - 1] ? 0 : 1;

            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      
                dp[i][j - 1] + 1,      
                dp[i - 1][j - 1] + cost 
            );
        }
    }

    return dp[m][n];
}
// https://www.codewars.com/kata/545cdb4f61778e52810003a2/train/javascript