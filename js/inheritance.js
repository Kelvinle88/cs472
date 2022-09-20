/*Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
    Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
*/

/*
Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
    Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]*/

/*
Exercise 3:
The last exercise for today comes from: https://www.learn-js.org/en/Inheritance
Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:
[teacher's name] is now teaching [subject]
Here is code for Person and an example of a Student function constructor.
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
 */