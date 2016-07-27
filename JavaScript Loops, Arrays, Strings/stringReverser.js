function reverseString(str){
    var resStr="";
    for (var i = str.length-1; i >= 0; i--) {
        resStr+=str.charAt(i);
        
    }
    console.log(resStr);
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');