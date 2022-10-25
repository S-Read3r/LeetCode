
function isValid(string) {
    let stack = [];

    for (let x of string) {
        let char = x;
        console.log(char)

        switch(char) {
            case '(': stack.push(')');
                break;
            case '{': stack.push('}');
                break;
            case '[': stack.push(']');
                break;
            default:
                if(stack.pop() !== char) {
                    return false;
                }
        }
    }
    return stack.length === 0
}
	
	console.log(isValid("()"))