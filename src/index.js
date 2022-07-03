module.exports = function reverse (n) {
    const reverseNum = parseFloat(n.toString().split('').reverse().join(''));
    return reverseNum;
}
