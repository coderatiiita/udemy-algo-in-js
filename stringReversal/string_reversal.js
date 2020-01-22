function reverseString(str) {
    // const arr = str.split('');
    // arr.reverse();
    // revStr = arr.join('');
    // return revStr;
    // return str
    //     .split('')
    //     .reverse()
    //     .join('')
    return str.split('').reduce( (rev, char) => char + rev, '');
}

let str = 'Hello World!!!';
let strs = str.split(' '); 

for (const str of strs) {
    console.log(reverseString(str));
}