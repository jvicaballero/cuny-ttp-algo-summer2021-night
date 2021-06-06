/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //If nothing in the string, return 0
    //if can't find substring return -1
    //if the substring == actual string, also return 0
    
    //using the substring needle, look for its occurrence by also splitting the haystack string 
    //by however long the needle length is.
    
    //Ie: laaaanguage = haystack
    //aaa = needle
    //if needle = haystack.substring(currentIndex, needle.length)
    //found the matching substring, return i
    
  if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  for (let i = 0; i <= haystack.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
    
};