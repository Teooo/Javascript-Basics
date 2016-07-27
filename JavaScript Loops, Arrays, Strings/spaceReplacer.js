function replaceSpaces(str){
    var ch="";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i)!=" ") {
            ch+=str.charAt(i);
        }
    }
    console.log(ch);
}
replaceSpaces("But you were living in another world tryin' to get your message through");