/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    // return s.toLowerCase()
    
    //only involves letters
    //have at least 1 in the input
    //split the characters and see if they are uppercase
    //if upper, convert
    //else ignore lower case
    //return all lowercase strings.
    
    //ASCII 65 - 90 = all uppercase letters
    //97 - 122 = all lowercase letters
    //there is a -32 diff between the uppercase and its corresponding lowercase
    //charCode(currentASCII + 32)
    
    let splitString = s.split('')
    
    let result = []
    
    for(let i = 0; i < splitString.length; i++){
        let charCode = s.charCodeAt(i)
        console.log(charCode)
        if(charCode >= 65 && charCode <= 90){
            //It is an uppercase
            let lowerLetter = String.fromCharCode(charCode + 32)
            result.push(lowerLetter)
        }
        else
            result.push(splitString[i])
    }
    
    return result.join('')
    
};