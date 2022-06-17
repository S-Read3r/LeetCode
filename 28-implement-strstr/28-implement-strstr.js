/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (!needle) return 0;
	if (!haystack) return -1;

	for (let a = 0; a < haystack.length; a++) {
		if (haystack.substr(a, needle.length) === needle) return a;
	}
	return -1;
};

console.log(strStr("hello", "ll"));
