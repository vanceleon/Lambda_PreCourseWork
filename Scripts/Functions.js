//const age = 9;
/*
const learningJS = true;

if (learningJS) {
  console.log('This class is great!')
} else {
  console.log('I\'m confused');
}*/
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
//Math.round is a function, potential for logic to run
//Math.round(); is function call
const result = Math.round(3.4);
//return value
result;*/
/*
const name = "Amelia";

//name.toUpperCase();
name.slice(2);*/


//Method is a function but not all functions are methods
//inside parenthesis is the input value

//parameter - generally what goes in the fn
//argument - specially what goes in a function call

/*
function log(str) {
  console.log(str);
};

log('Sorry the connection has been so bad');
log('My name is Vance');

//logName expects one parameter: a name

This is the better way to write functions
function combine(p1, p2, p3) {
  const combination = p1 + p2 + p3;
  return combination;

}
combine(3,3,5);


const combine = function(p1, p2, p3) {
  const combination = p1 + p2 + p3;
  return combination;
}
combine('Vance', 'Leon', 'Rocks');
*/

//careful when using Global varables inside functions
//arguments within function scope
// const combine = function(p1, p2, p3) {
//   const combination = p1 + p2 + p3;
//   return combination;
// }
// combine('Vance', 'Leon', 'Rocks');




/*
Stock Return function
function dailyReturns (p1, p2) {
  let dReturns = (p2-p1)/p1;
  return dReturns;
}
dailyReturns(90, 100);*/

// function greeting() {
//   const x = 4;
//   const y = 3;
//   console.log(x + y);
//   return 'Morning!';
// };

// greeting();

// function greeting() {
//   for (let i = 5; i < 5; i++) {
//     //return i; this will make the loop end
//   }
//   return
//   }
// };

// greeting();



// function greeting(name) {
//   //name === undefined is same as !name
//   if (!name) {
//     return;
//   }

//   return 'Hello, ' + name;
// };

// greeting('Vance');


// function getHTMLTag (tagName) {

// };


//HW functions are listed below

// function addOne(x) {
//   let x1 = x + 1;
//   return x1;

// };
// addOne(4);


// function dailyReturns (p1, p2) {
//   let dReturns = (p2-p1)/p1;
//   return dReturns;
// }
// dailyReturns(90, 100);


// function divide(x, y) {
//   let z = x/y;
//   return z;
// };
// divide(5, 4);


// function getBiggest(x, y) {
//   return Math.max(x, y);
// };
// getBiggest(5, 15);

// function getLength(str) {
//   str = str.length;
//   return str;
// }
// getLength("Vance");



// function orderPizza(str) {
//   if (str == true){
//     return "Cheese Pizza";
//   } else {
//       return 'Pepperoni Pizza';
//   }

// }
// orderPizza(false);



// function countDown(num) {
//   for (let i = num; num > 0;num--){
//     console.log(num);
//   };

// }
// countDown(20);


// function repeat(phrase, x) {
//   for (let i = x;x > 0; x--) {
//     console.log(phrase);
//   };

// }
// repeat('not your mama\'s edamame', 20);

// // var perimeterBox = function(length, width) {
// // return length * 2 + width * 2;
// // };
// // perimeterBox(9, 8)

// function combine(p1, p2, p3,x){
//   for (let i = x; x > 0;x--) {
//       const combination = p1 + p2 + p3;
//       console.log (combination);

//   };

// }
// combine('Test', 'One', 'Two', 5);


export function getHTMLTag(tagName) {
   const HTMLTag =  '<'+ tagName + '></' + tagName + '>';
   const HTMLTag = `<${tagName}></${tagName}>`;
   return HTMLTag;
}
getHTMLTag('p');

function countDown(num) {
  for (let i = num; num >= 0;num--){
    console.log(num);
  };

}
countDown(20);
