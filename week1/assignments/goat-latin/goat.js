/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    //split the sentence on the spaces, then split the word.
    //append/according to the rules using the indeces
    //Starts with a vowel: end ma
    //Starts with consonant: take out first letter, add first letter to end + ma
    //After applying the rule, add # a to the end corresponding to the word count.
    
    //wil need an array of the vowels to check if the first letter is one, 
    //count how many words we are up to to add that many a at the end of the formatted word
    //rejoin the word after splitting
    
    //rejoin the array after formatting each word
    
    let wordCount = 1;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let words = sentence.split(' ')
    let sentenceLength = words.length
    
    for(let i = 0; i < sentenceLength; i++){
        let addA = 0;
        let formatWord = words[i].split("")
        
        if(vowels.includes(formatWord[0])){
            formatWord.push("ma")
        }
        
        else{
            let shiftedLetter = formatWord.shift()
            formatWord.push(shiftedLetter)
            formatWord.push("ma")

        }
        
        for(let j = 0; j < wordCount; j++){
            formatWord.push('a')
        }
        
        let newWord = formatWord.join('')
        console.log(formatWord)

        words[i] = newWord
        wordCount++    

    }
    
    let newSentence = words.join(' ')
    return newSentence;
    
    
};