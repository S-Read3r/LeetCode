/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
const res = [];

//I will use a for loop to iterate through the given sing
for(let x in str) {

    //I will use charAt() to pull a character at location(x) from the given string, then use a switch statement which is more efficient than using many else statements. 
    let pulldChar = str.charAt(x);
    switch(pulldChar) {
        case '[': res.push(']');
            break;
        case '(': res.push(')');
            break;
        case '{': res.push('}');
            break;
         default:
             if (pulldChar !== res.pop()) {
                 return false
             }
    }
}

return res.length === 0
};

console.log(isValid("{[()]}"))