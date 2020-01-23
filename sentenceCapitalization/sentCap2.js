function capitalize(sentence) {
    let result = sentence[0].toUpperCase();
    
    for (let i = 1; i <  sentence.length; i++) {
        if (sentence[i - 1] === ' ') {
            result += sentence[i].toUpperCase();
        } else {
            result += sentence[i];
        }
    }
    
    return result;
}

console.log(capitalize('a lazy fox'));