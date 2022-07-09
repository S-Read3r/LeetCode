/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map()
    for(let a of s) {
        if (map.has(a)) {
            map.set(a, map.get(a) + 1)
        } else {
            map.set(a, 1)
        }
    }
    for(let b of t) {
        if (map.has(b)) {
            map.set(b, map.get(b) - 1)
        } else {
            map.set(b, -1)
        }
    }
    for (let [key, value] of map) {
        if (value !== 0) {
            return false
        }
    }
    return true

};
// @lc code=end

console.log(isAnagram('aacc','ccac'))
