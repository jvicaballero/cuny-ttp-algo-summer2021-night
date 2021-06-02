/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    //Maybe similar to what we did with the parens to match in class
    //have a stack to push the R and if encountering an L, pop that many Rs an
    //have a count for the case if L comes first
    
    let stack = []
    let count = 0
    let pair = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "R"){
            stack.push(s[i])
        }
        else if(stack.length > 0)
            {
                stack.pop()
            }
        
        
        if(stack.length == 0)
            count++
    }
    
    return count
};