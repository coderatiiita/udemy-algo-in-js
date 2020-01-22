function reverseInt(n) {
    // let rev = 0;
    // while(n !== 0) {
    //     rev += n%10;
    //     n /= 10;
    // }
    // return rev;
    
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(3452));