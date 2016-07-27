function findYoungestPerson(persons) {
    persons.sort(function (left, right) {
        return left.age - right.age;
    });

    return persons[0].firstname + ' ' + persons[0].lastname;
}

var persons = [
    { firstname: 'George', lastname: 'Kolev', age: 92 }, // Changed value!!!
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Baba', lastname: 'Ginka', age: 40 }];

var youngestPersonName = findYoungestPerson(persons);
console.log("The youngest person is %s", youngestPersonName);