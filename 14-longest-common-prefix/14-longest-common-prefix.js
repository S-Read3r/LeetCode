/**
 * @param {string[]} strs
 * @return {string}
 */

//NOTE: The best way to solve this problem is to compare each word in the array also removing a letter from each word until a matching string on all items in the array is found.
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return ''
    };
    //I will need a word to compare to, which will be stagnant.
    let prefix = strs[0];

    //Iterating from the first word, disregarding the stagnant word for now.
    for(let x = 1; x < strs.length; x++) {

        //NOTE: Unlike the convertional compare parameter I am used to where the stagnant word is run as stagnant.indexOf. In this case, since I am comparing the stagnant word with multiple words or characters in an array. Removing each word from multiple words to find the prefix would take a substantial amount of memory. So hence why prefix is used instead of the mobile word of which in this case it an array, NOT a single string. 
        while (strs[x].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length -1)
        }
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))