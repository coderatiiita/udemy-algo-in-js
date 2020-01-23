function anagrams (strA, strB) {
    return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('abc!', 'bca'));