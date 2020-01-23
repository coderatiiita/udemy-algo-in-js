function capitalize(str) {
    let capSentenceWords = [];

    for (let word of str.split(' ')) {
        capSentenceWords.push (word[0].toUpperCase() + word.slice (1) );
    }

    return capSentenceWords.join(' ');
}

console.log(capitalize('a lazy fox'));