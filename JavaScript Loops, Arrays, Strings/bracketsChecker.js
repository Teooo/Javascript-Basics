function checkBrackets(str){
    var openBr=0;
    var closeBr=0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i)=="(") {
            openBr++;
        }
        else if(str.charAt(i)==")"){
            closeBr++;
        }
    }
    if (openBr == closeBr) {
        console.log("Correct");
    }
    else{
        console.log("Incorrect");
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');