function calcSupply(age, maxAge, food, foodPerDay){
    var day=(maxAge - age)*365;
    var FoodAll=day * foodPerDay;
    return FoodAll;
}
console.log(calcSupply(38,118,"chocolate",0.5));
console.log(calcSupply(20,87,"fruits",2));