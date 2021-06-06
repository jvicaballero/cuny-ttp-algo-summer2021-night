/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    //return an empty string if no common prefix found 
    //only lower case
    //no string? return empty
    
    //Prefix im assuming means the matching string has to have at least 2 letters?
    
    //The length of the common prefix will depend on the shortest word in the array
    
    //make a substring for prefix for the first word in the array and compare with other words
    //while(matches with other strings)
    //keep adding letters to the substring until it doesn't match
    //return the last matching substring that matches the other strings
    
    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            //strs[0][i] compares the current comparing word from its beginning up to the letter i
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};