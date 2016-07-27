function findLargestBySumOfDigits(arr) {
    var largestBySumOfDigits, maxSum = -1;

    for (var i = 0; i < arr.length; i++) {
        var number = Math.abs(Number(arr[i]));
        if (!isInt(number)) {
            return undefined;
        }

        var currentSum = 0;
        while (number > 0) {
            currentSum += number % 10;
            number = Math.floor(number / 10);
        }

        if (currentSum == Math.max(currentSum, maxSum)) {
            maxSum = currentSum;
            largestBySumOfDigits = arr[i];
        }
    }

    return largestBySumOfDigits;
}

function isInt(n) {
    return n % 1 === 0;
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));