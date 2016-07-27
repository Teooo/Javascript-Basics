function variablesTypes(arr){
    var name="My name:"+arr[0] + " //type is:"+ typeof(arr[0]);
    var age="\nMy age:"+arr[1] + " //type is:"+ typeof(arr[1]);
    var isMale="\nI am male:"+arr[2] + " //type is:"+ typeof(arr[2]);
    var food="\nMy favorite foods are:" +arr[3] + " //type is:"+ typeof(arr[3]);
    return name + age + isMale + food;
}
console.log(variablesTypes(['Pesho',22,true,['fries','Banana','cake']]));