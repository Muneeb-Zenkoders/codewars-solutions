// The idea for this kata came from 9gag today:

// The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function toNato(words) {
    // you can access the preloaded NATO dictionary
    // NATO['A'] === 'Alfa', etc.
    let str = "";
    console.log(words.length)
    for(let i=0;i<words.length;i++){
      if((((words.charCodeAt(i))>=65&&(words.charCodeAt(i))<=90))||((((words.charCodeAt(i))>=97&&(words.charCodeAt(i))<=122)))){
        str = str + NATO[words[i].toUpperCase()]+" ";
      }
      else{
        if(words[i]==" "){
          continue;  
        } 
        else
        str = str + words[i]+' ';
      }
    }
    if(str[str.length-1]==' ') return str.substring(0,str.length-1)
    return str;
}

// https://www.codewars.com/kata/586538146b56991861000293/train/javascript