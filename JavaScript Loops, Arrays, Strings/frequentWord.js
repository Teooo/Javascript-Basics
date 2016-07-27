function findMostFreqWord(str) {
    var words = str.toLowerCase().split(/[\W\d]+/g);

    var counts = {};

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    }

    var values = Object.keys(counts).map(function(val) {
        return counts[val];
    });

    var biggestValueIndex = values.indexOf(Math.max.apply(null, values));
    var keys = Object.keys(counts);
    var freqWords = [];

    for (var i = 0; i < keys.length; i++) {
        if (values[i] == values[biggestValueIndex]) {
            freqWords.push(keys[i]);
        }
    }

    for (var word in freqWords) {
        console.log("%s -> %d times", freqWords[word], values[biggestValueIndex]);
    }

}
//findMostFreqWord("in the middle of the night");
//findMostFreqWord("Welcome to SoftUni. Welcome to Java. Welcome everyone.");
findMostFreqWord("Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.");