function treeHouseCompare(arr){
    var houseArea = arr[0] * arr[0] + arr[0] * arr[0] * 2 / 6;
    var circleRadius = (arr[1] / 3) * 2;
    var treeArea = (arr[1] * (arr[1] / 3) + Math.PI * circleRadius * circleRadius).toFixed(2);
    if (houseArea > treeArea) {
        var house="house/";
        return  house +houseArea  ;

    }
    else {
        var tree="tree/"
        return tree +treeArea;
    }
}
console.log(treeHouseCompare([3,2]));
console.log(treeHouseCompare([3,3]));
console.log(treeHouseCompare([4,5]));