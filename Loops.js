/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels=["a","e","i","o","u"];
    
    let sVowels = [];
    let sConsonants = [];
    
    for(let i = 0; i< s.length; i++){
        if(vowels.includes(s[i])){
            sVowels.push(s[i]);
            }
        else{
            sConsonants.push(s[i]);
        }
    }
    for(let j=0; j<sVowels.length; j++){
        console.log(sVowels[j]);
    }
    for(let k=0; k<sConsonants.length; k++){
        console.log(sConsonants[k]);
    }
    
    
    
    
}