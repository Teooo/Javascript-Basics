function compareChars(arr1, arr2){
    var equal="Equal";
    if (arr1.length == arr2.length){
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                console.log("Not Equal");
            }else{
                console.log(equal);
            }
        }

    }
}
