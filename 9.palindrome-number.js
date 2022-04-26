/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Convert x into a string and reverse it.
    let reversed = x.toString().split('').reverse().join('')

    //Convert x into a string and compare it to the reversed x.
    let inputX = x.toString();

    //Check whether inputX and reversed are equal
    return inputX === reversed
};

console.log(isPalindrome(434))

// @lc code=end

