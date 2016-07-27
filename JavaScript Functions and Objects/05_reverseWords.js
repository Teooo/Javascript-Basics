function reverseWordsInString(str) {
    var words = str.split(' ');
    var result = "";

    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('');
        result += ' ';
    }

    return result.trim();
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));