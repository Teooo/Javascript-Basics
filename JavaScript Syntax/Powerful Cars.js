function CovertKWtoHP(carKw){
    var carhp = carKw / 0.745699872;
    return carhp.toFixed(2);
}
console.log((CovertKWtoHP(75)));
console.log(CovertKWtoHP(150));
console.log(CovertKWtoHP(1000));