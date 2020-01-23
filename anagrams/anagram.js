function charMapOf(string) {
    map = {};
    
    for (const char of string.replace(/[^\w]/g, '').toLowerCase()) {
        map[char] = map[char] + 1 || 1;
    }

    return map;
}

function anagrams(strA, strB) {
    const charMapA = charMapOf(strA);
    const charMapB = charMapOf(strB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
    
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}

console.log(anagrams('abc', 'bca'));