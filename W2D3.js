/*1.Modify this code to make a revealing module that returns an object with two methods. The
returned object should have a add() method and a reset() method. Where the add method
adds 1 to the counter, and the reset method set it back to zero.*/
var add = function () {
    var counter = 0;
    function add(){
        return counter + 1;
    }
    function reset() {
        return counter = 0;
    }
    return{
        add:add,
        reset:reset
    }
}();
console.log(add.add())
console.log(add.reset())
/*2./
/*3. The add() function in question 1 always adds 1 to the counter each time it is called. Write a
make_adder(inc) function whose return value is an add function with increment value of
inc instead of 1. In other words your function should be able to do the following:*/

var maker_add =(function (add) {
    var counter = 0;
    return function () {
        var expect = counter + add
        counter = counter + add
        return expect;
    }
     function reset() {
        counter = 0;
    }
});
var add5 = maker_add(5);
console.log(add5())
console.log(add5())
console.log(add5())

/*5.Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an
Employee Object with the following fields and methods:
Private field: name
Private field: age
Private field: salary
Private method: getName()
Private method: getAge()
Private method: getSalary()
Public method: setName()
Public method: setAge()
Public method: setSalary()
Public method: increaseSalary(percentage) // uses private getSalary()
Public method: incrementAge() // uses private getAge()*/
var moduleEmployee = function () {
    var name;
    var age = 2 ;
    var salary = 10;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function setName(name) {
        name = name;
    }

    function setSalary(salary) {
        salary = salary;
    }

    function setAge(age) {
        age = age;
    }

    function increaseSalary(percentage) {
        return getSalary() * percentage + getSalary();
    }

    function incrementAge() {
        return getAge() + 1;
    }

    return {
        SetName: setName,
        SetAge: setAge,
        SetSalary: setSalary,
        IncreaseSalary: increaseSalary,
        IncrementAge: incrementAge
    }
}()
//test public
console.log(moduleEmployee.IncreaseSalary(0.1))


/*6. Write a few JavaScript instruction to make a Module extension to the module made in the
previous question. Very important – you are not allowed to modify any of the code to facilitate
the extension. Your extension should add a public address field and public methods
setAddress(address) and getAddress()*/
moduleEmployee.extension = function (){
    var address = "414 NB Street";
    function setAddress(address){
        address = address;
    }
    function getAddress(){
        return address;
    }
    return {
        Address: address,
        GetAddress:getAddress,
        SetAddress:setAddress
    }
}()
//test extension
console.log(moduleEmployee.extension.Address)

