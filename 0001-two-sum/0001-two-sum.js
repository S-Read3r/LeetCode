function twoSum (arr, target) {
    let map = new Map();
    
    for(let x = 0; x < arr.length; x++) {
        let num1 = arr[x];
        let num2 = target - num1;
        
        if(map.has(num2)) {
            return [map.get(num2), x]
        } else {
            map.set(num1, x)
        }
        
    }
}