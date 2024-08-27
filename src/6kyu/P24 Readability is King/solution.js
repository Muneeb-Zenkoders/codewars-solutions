// Count the number of vowels as an approximation for the number of syllables, but count groups of vowels as one (e.g. deal is one syllable). Do not count y as a vowel!

// Example
// "The turtle is leaving." ==> 3.67
// The average number of words per sentence is 4 and the average number of syllables per word is 1.5. The score is then (0.39 * 4) +  (11.8 * 1.5) - 15.59 = 3.67

function fleschKincaid(text){
    const sentences = text.split('. ').map(sentence => sentence.trim()).filter(Boolean);
    let sum = 0;
    for(let i=0;i<sentences.length;i++){
        sum+=countWords(sentences[i]);
    }
    let avg = sum/sentences.length;
    let readibility = ((0.39*avg) + (11.8*averageSyllablesPerWord(text)))-15.59;
    return Math.round((readibility + Number.EPSILON) * 100) / 100;
    }
    function countSyllables(word) {
        word = word.toLowerCase().trim();
        
        if (word.length === 0) return 0;
        
        word = word.replace(/[^a-z]/g, '');
        if (word.length === 0) return 0;
    
        const vowelClusters = /[aeiouy]+/g;
        const matches = word.match(vowelClusters);
    
        if (!matches) return 0;
    
        if (word.endsWith('e') && !word.endsWith('le') && !word.endsWith('ae') && !word.endsWith('ie')) {
            return Math.max(1, matches.length - 1);
        }
    
        return matches.length;
    }
    
    function averageSyllablesPerWord(text) {
        const words = text.split(/\s+/);
        
        let totalSyllables = 0;
        let totalWords = 0;
    
        words.forEach(word => {
            const syllables = countSyllables(word);
            if (syllables > 0) {
                totalSyllables += syllables;
                totalWords += 1;
            }
        });
    
        if (totalWords === 0) return 0;
    
        return totalSyllables / totalWords;
    }
    function countWords(sentence) {
        const words = sentence.trim().split(/\s+/);
        return words.length;
    }

    // https://www.codewars.com/kata/52b2cf1386b31630870005d4/train/javascript