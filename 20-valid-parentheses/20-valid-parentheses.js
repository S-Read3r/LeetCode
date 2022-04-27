/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//I thought of using regex, then I realised that the process of making all the combinations would be long. Instead, I opted to using an Obj or Map that has bracket1(br1) as key and br2 as value. 
    let br = {
        '(':')','[':']','{':'}'
    };

    let heap = [];
//char for character
    for(let char of s) {
        if(br[char]) {
            heap.push(br[char])
        }else{
            if(heap.pop() !== char) {
                return false
            }
        }
    }
    return (!heap.length)
};

console.log(isValid("()[]{}"))