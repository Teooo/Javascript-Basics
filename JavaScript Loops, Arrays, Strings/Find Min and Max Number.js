function findMinAndMax(number){
    number.sort(function(a,b){
        return   a > b;
    })
    console.log('Min -> '+number[0]+'\nMax -> '+number[number.length-1]);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);