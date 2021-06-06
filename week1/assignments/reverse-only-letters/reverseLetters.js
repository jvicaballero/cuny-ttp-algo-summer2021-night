/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    //65 - 90 = uppercase letters
    //97 - 122 = lowercase letters
    
    //so have 2 pointers, in the beginning and in the end.
    //check the current index of each pointer, if it is a letter, swap them then inc/dec
    //if pointer1 is a symbol, ignore and increment
    //if pointer2 is a symbol, ignore and dec
    
    //do this while pointer 1 != pointer2
    
    let ref1 = 0
    let ref2 = s.length - 1
    let asciiValRef1 = 0
    let asciiValRef2 = 0
    
    let isLetterVal1 = false
    let isLetterVal2 = false
    
    let revStrings = []
    
    let arrayString = s.split('')
    
    while(ref1 != ref2)
        {
            isLetterVal1 = false
            isLetterVal2 = false
            
            asciiValRef1 = s.charCodeAt(ref1)
            asciiValRef2 = s.charCodeAt(ref2)
            
            if((asciiValRef1 >= 65 && asciiValRef1 <= 90) || (asciiValRef1 >= 97 && asciiValRef1 <=122)){
                isLetterVal1 = true
            }
            else
                ref1++
            
            if((asciiValRef2 >= 65 && asciiValRef2 <= 90) || (asciiValRef2 >= 97 && asciiValRef2 <=122)){
                isLetterVal1 = true
            }
            else
                ref2--
            
            let temp = arrayString[ref1]
            arrayString[ref1] = arrayString[ref2]
            arrayString[ref2] = temp
            
            ref1++
            ref2--
            
        }
    
    let newString = arrayString.join('')
    return newString
};

//THIS SOLTN GIVES ME AN ERROR THAT SAYS JAVASCRIPT HEAP OUT OF MEMORY