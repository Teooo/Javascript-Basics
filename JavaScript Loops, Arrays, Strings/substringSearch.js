function countSubstringOccur(arr){
    var key=arr[0].toString().toLowerCase();
    var text=arr[1].toString().toLowerCase();
    var count=0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i)==key.charAt(0)){
            var sameWord=true;
            for (var j = 0; j < key.length; j++) {
                if (text.charAt(i + j)!= key.charAt(j)) {
                    sameWord=false;
                }
            }
            if(sameWord){
                count++;
            }
        }

    }
    console.log(count);
}
countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(["your", "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."]);
countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]);