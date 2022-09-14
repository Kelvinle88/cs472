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

