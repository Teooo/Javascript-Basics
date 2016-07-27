function bitChecker(number){
    var isOne = ((number>>3) & 1) != 0;
    return isOne;
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));