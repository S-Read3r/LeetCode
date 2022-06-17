/**
 * @param {number} x
 * @return {boolean}
 */
// make a palindorme checker
var isPalindrome = function(x) {
	//check if the input arguement is a number
	if (typeof x !== "number") {
		return false;
	} else {
		//convert the number to a string
		var xString = x.toString();
		//reverse the string
		let xReversed = xString.split("").reverse().join("");
		//check if the reversed string is the same as the original string
		if (xString === xReversed) {
			return true;
		} else {
			return false;
		}
	}
}
