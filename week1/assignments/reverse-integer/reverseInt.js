/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    //if the number is negative, have a state true
    //if bigger than 2^31, return 0
    
    //easier to abs the number first then append negative in the end
    //method in js to reverse an array, so maybe split the x then.reverse,then join it again.
    
    let isNegative = false
    if(x < 0)
        isNegative = true
    
    let formatNumber = Math.abs(x).toString().split('')
    
        
    let revNumber = formatNumber.reverse().join('')
    
    if(revNumber > Math.pow(2,31))
        return 0
    
    if(isNegative)
        revNumber *= -1
    
    return revNumber
    
    
};