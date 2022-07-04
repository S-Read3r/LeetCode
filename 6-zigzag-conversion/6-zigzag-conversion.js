/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	// return original string if can't zigzag
	if (numRows === 1 || s.length < numRows) return s;

	let rows = [];
	let converted = "";
	let zigZag = true;
	let count = 0;

	// NOTE: create arrays equvilent to numRows
	for (let a = 0; a < numRows; a++) {
        let row = rows[a] = [];
		console.log(row)
	}
    //NOTE: iterate through the string and check if zigzag mode is true or false
    for (let a in s) {
        let currentChar = s[a];
		rows[count].push(currentChar);
        //NOTE: if zig mode is true, increment count and move to next row
		zigZag ? count++ : count--;

        //NOTE: when count reaches the end of the array, set zigzag mode to false
		if (count === numRows - 1 || count === 0) {
            zigZag = !zigZag;
        }
	}
	// convert the arrays into a string
	return rows.reduce((converted, cur) => converted + cur.join(""), "");
};

// @lc code=end

