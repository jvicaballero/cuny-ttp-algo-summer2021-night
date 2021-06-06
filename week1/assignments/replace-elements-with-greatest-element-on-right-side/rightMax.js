/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    // last element in array will always be -1 since we can't compare it with anything else
    //will always have at least 1 element in array
    //if only 1 element, return -1
    //have a loop to keep track of which element im currently comparing
    //another to traverse the rest of the array
    //store highest value and push to result array after reaching the end
    
    
    //return array with highest vals
    
    //ORRRRRR we start from the end of the array, put the last 2 elements on a map (or another array since I'm not looking for key)
    //Loop from the end of array - 2 and check if there is a larger value in the map. If there is, push that value onto new array
    //else push the current value I'm on. 

    let currentMax = 0
    let resultArray = []
    
    for(let i = 0; i < arr.length; i++){
        //Im not including the current index as the greatest value, just the ones to the right of it
        currentMax = arr[i + 1]
        for(let j = i + 1; j < arr.length; j++){
            if(currentMax < arr[j + 1])
                currentMax = arr[j + 1]
        }
        resultArray.push(currentMax)
    }
    
    //end of array should have -1
    resultArray[arr.length - 1] = -1
    return resultArray
    

    

};