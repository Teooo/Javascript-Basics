function findMostFreqNum(arr){
    var counts={};
    for (var i = 0; i < arr.length; i++) {
        var num=arr[i];
        counts[num]=counts[num]?counts[num]+1 :1;
    }
    var values=Object.keys(counts).map(function(val){
        return counts[val];
    })
    var biggistValueIndex=values.indexOf(Math.max.apply(null,values));
    var key=Object.keys(counts);
    console.log(key[biggistValueIndex]+" ("+ values[biggistValueIndex]+" times)");
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);