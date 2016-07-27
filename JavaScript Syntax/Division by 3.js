function divisionBy3(number){
    var sumOfDigit= 0;
    while(number > 0){
        sumOfDigit+=number %10;
        number=parseInt(number/10);
    }
    if (sumOfDigit % 3 == 0) {
        console.log("the number is divided by 3 without remainder");
    }
    else{
        console.log("the number is not divided by 3 without remainder");
    }
}
divisionBy3(12);
divisionBy3(188);
divisionBy3(591);