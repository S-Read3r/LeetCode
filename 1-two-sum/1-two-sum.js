/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        //I will use a hash map to store what has been seen already, and recall if the number has been seen already.
    let map = new Map();
    
        // I must iterate through the array
    for(let x = 0; x < nums.length; x++) {
        
        //I must store the value of location[x] to later use to find the missing number/
        let cVal = nums[x];
        
        // Subtracting cVal from target will reveal the missing number, and then confirm it's existance in the list.
        let reVal = target - cVal;
        
        // I must ask map if it `has` requiredValue(reVal)
        if(map.has(reVal)) {
        
        //Now that the iteration has found the missing number, I (r) their indexs
            return [x, map.get(reVal)]  //To get the index of the second number, I asked map to .get(reVal)
        }
        //If reVal is not found, I used map to set the currentValue and its index(zbi) for recalling/remembering
        map.set(cVal, x)
        
    }
};

//Notes: the time complexity is 0 - n, since the fn() is looping through all the numbers. 
// The space complexity is also o of n because in the worse case, the array could be holding 10,000 numbers.
//This is giving up memory as we increase these set of numbers.