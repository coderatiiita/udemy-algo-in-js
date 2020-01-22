function maxChar(str) {
    let map = {};
    
    str.split('').forEach(char => {
        if(map[char] === undefined) {
            map[char] = 1;
        } else {
            map[char]++;
        }
    });
    
    let max = -1;
    let maxChar = '';
    for (let char in map) {
        if(max < map[char]) {
            max = map[char];
            maxChar = char;
        }
    }
    return maxChar;
    //console.log(map);
}

console.log(maxChar('aaabbbbbsssfffffffa'));