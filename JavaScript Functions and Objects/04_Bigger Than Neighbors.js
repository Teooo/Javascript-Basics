
function biggerThanNeighbors(index, arr) {
    if (index >= 0 && index < arr.length) {

        if (index == 0 || index == arr.length - 1) {
            return NaN;
        }

        var number = arr[index];
        var leftNum = arr[index - 1];
        var rightNum = arr[index + 1];
        return Math.min(number - leftNum, number - rightNum);
    }
}

function printResult(index, arr) {
    var result = biggerThanNeighbors(index, arr);

    if (result == undefined) {
        console.log("invalid index");
    } else if (isNaN(result)) {
        console.log("only one neighbour");
    } else if (result > 0) {
        console.log("bigger");
    } else {
        console.log("not bigger");
    }
}

printResult(2, [1, 2, 3, 3, 5]);
printResult(2, [1, 2, 5, 3, 4]);
printResult(5, [1, 2, 5, 3, 4]);
printResult(0, [1, 2, 5, 3, 4]);