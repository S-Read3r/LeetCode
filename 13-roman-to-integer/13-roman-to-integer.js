/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //First I must create an object to later use when in search of the value of the romanNumeral(romNum)
    const map = {I: 1, V:5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    //I initialize results to 0
    let res = 0;

    //I split the given string into an array/list and find the value of each romNum
    
    let x = s.split('').forEach((romNum, index) => {
    //index is automatically intialized to 0. A console.log(index) will (r) numbers from 0 to 6 given s = 'MCMXCIV'. 
    //NOTE: I must compare the currentRomNum to the nextRomNum and I can this accessing the s(String) using the given looping `index`. This will (r) a character from the string, and `adding` one will return the next character. `map` Obj is then used to find the value of the next character and continue the if statement. 

    // I must check whether the next character is of greater value than the current character since IV is 4 and and VI is 6. 

    console.log(s[index])
        if(map[romNum] < map[s[index + 1]]) {
    //Here is the explaination of  " res -=map[num] & res+=map[num] ". The reason is, res is initialized to 0. Using "IV" as an example. Since '1'<'5' is true, then (res = res - 1) is run. (0 = 0 - 1) leads to (res = -1). Then 'V' is looped through since forEach was used and 'V' does not have a next number to compare it to. So the if statement fails and runs the `else` statement instead which takes results in (res = (-1) + 5). The answer is then res = 4.
    
            res -= map[romNum]
        } else {
            res += map[romNum]
        }
    })

    return res
};

console.log(romanToInt('IV'))