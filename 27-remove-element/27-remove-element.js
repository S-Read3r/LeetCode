/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;
    let i = 0;
    for(let x in nums) {
        if(nums[x] !== val) {
            nums[i] = nums[x];
            i++
        }
    }
    return i
};