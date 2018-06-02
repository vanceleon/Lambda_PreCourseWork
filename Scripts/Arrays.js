//Dry - Don't Repeat yourself;
//what not to do
// const student1 = 'Vance Leon';
// const student2 = 'Renee Leon';
// const student3 = 'Ronald Donald';

//This data above is related, array is the best form to make contections with the data
//convection and readers pural names are used for arrays


// const students = [
// 'Vance Leon',//0 item
// 'Renee Leon',//1 item
// 'Ronald Donald',//2
// 'Melissa Smith'//3
// ];

// students[0];

// const todo = [
//   "Teach lesson 6",
//   "Go for walk",
//   "cook dinner",
//   "Clean Kitchen"
// ];

// todo[1];

//assignment or reassignment
// const todo = [
//   "Teach lesson 6",
//   "Go for walk",
//   "cook dinner",
//   "Clean Kitchen"
// ];

// todo[4] = "Reading a book";
// todo;

// //arrays dont have to have the same data types in them but be careful

// const randomStuff = [
//   true,
//   "string",
//   [],
//   8
// ];
// randomStuff;

// const todoItem = "Rearrange furniture";
// todo[4] = todoItem;

//properties and methods for arrays

// const todo = [
//   "Teach lesson 6",
//   "Go for walk",
//   "cook dinner",
//   "Clean Kitchen"
// ];

// todo[4] = "Reading a book";
// todo;

// todo.push("Pray");
// //push is method, type of function

// todo.pop();
// todo;


//objects
//dont want varable declaration
const name = "Vance Leon";
const location = "New jersey";
const age = 34;
const hometown = "Fullas, AK";
const knowJS = false;

//objects {} syntax
//objects are better to lump different data types


// const studentInfo = {
//   name: "Vance Leon",
//   currentLocation: "New York",
//   age: 22,
//   hometown:"Fullas, CA",
//   knowJS:false,
//   sayHi: function(){
//   console.log('Hello! I am ' + this.name);
//   },
// };

// //lookup
// studentInfo.gender = "Male";
// studentInfo.knowJS = true;
// delete studentInfo.knowJS;
// studentInfo;


// studentInfo.sayHi = function() {
//   console.log('Hello! I am ' + this.name);
// };

// //studentInfo.name = "Renee Leon";
//studentInfo.sayHi();

// const numbers = [3, -2, 4, 33, -10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


//object for in loops

// const studentInfo = {
//   name: "Vance Leon",
//   currentLocation: "New York",
//   age: 25,
//   hometown:"Fullas, CA",
//   knowJS:false,
//   sayHi: function(){
//   console.log('Hello! I am ' + this.name);
//   },
// };

//key is the i in for loops, key preferred, in: object looping through

// for (let key in studentInfo){
//   console.log('key:', key);
//   console.log('value:', studentInfo[key]);
// }


// function testFn(){
  // console.log(arguments)
  // return arguments;
// };

// testFn(true,'Shovel',27);


console.log("Vance Is Awesome");
