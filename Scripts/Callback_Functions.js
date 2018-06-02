//another way to store functions
// const combine = function (arg1, arg2) {
//   const x = arg1 + arg2;
//   return x;
// };



//inputs are called parameters

//declare function through naming it, parameters are inside parenthesis

function combine(param1, param2) {
  const x = param1 + param2;//logic in the function
  return x;//output back out of the function
};

// const result = combine(1,2);
// console.log(result);

const combineV2 = combine;
combineV2(3,9)

//calling the function with parameters in parenthesis


function identity(x){
  return x;
}
identity('Vance');
identity([1,2,3,4]);
identity(console.log);//pass function name into function
const log = identity(console.log);//passing function into another function
log('Hey')


function returnlog (){
  return console.log;

};
returnlog()('hey!');//returning through a function


//callback function - function that you pass into another function

//identity function is the higher order function
//higher order function - function that takes in a function as a argument
identity(console.log)//console.log is the callback function
//no return value
function logNegative(x) {
  console.log(-x);
};

function logPlusTwo(x) {
  console.log(x+2);
};


function getNegative(x) {
  return -x;
};

//1 parameter: a single element
//return mutated value

function roundValue(x) {
  return Math.round(x);
};

const numbers = [1.3,2.2,3.6,4.7,2,4,7,86,-3];
//higher order function
//1 parameter: callback function
//no return value
numbers.forEach(logNegative);
numbers.forEach(logPlusTwo);

//return a mapped array
numbers.map(getNegative);
numbers.map(Math.round); //can pass in existing functions
numbers.map (function(x){
  return x+10;
});
// numbers.reduce great for reducing to single number
numbers.reduce(function (currentTotal,x) {
  return currentTotal + x ;

});

.forEach looping through array


const words = ['yarn', 'blarg', 'blargity'];
const capitalizedWords = [];

for (let i=0; i < words.length; i++) {
  console.log(words[i]);
}

words.forEach(function(item) {
  console.log(item);
});

for (let i = 0;i < words.length;i++) {
  const capitalized = words[i].toUpperCase();
  capitalizedWords.push(capitalized);
}
console.log(capitalizedWords);

words.map (function(item){
  return item.toUpperCase();
});

function giveFeedback(cb) {
  console.log("Hey, there's something I want to tell you:");
  cb();
}

function compliment() {
  console.log('You have really nice teeth.');
};
compliment();
function insult() {
  console.log(" Your elbows are really ugly.");

};

function neutral() {
  console.log("You're okay I guess");
};

giveFeedback(insult);


const numbers = [1,2,3,4,2,33,2];
numbers.filter(function(item) {
  return item !== 2;
});
