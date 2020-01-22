let str = 'abcba';

function isPalindrome(str) {
    //return str.split('').reverse().join('') === str ? true : false;
    
    // let rev = (str.split('').reduce( (rev, char) => {
    //    return char + rev; 
    // }, ''));
    // return (rev === str);
    
    return str.split('').every( (char, i) => {
       return char === str[str.length - i - 1]; 
    });
}

console.log(isPalindrome(str));