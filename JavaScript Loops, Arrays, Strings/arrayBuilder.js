function createArray(){
    var numberArr=new Array(20);
    for (var i = 0; i < numberArr.length; i++) {
        numberArr[i]=i * 5;
        
    }
    console.log(numberArr.join(' '));
}
createArray();