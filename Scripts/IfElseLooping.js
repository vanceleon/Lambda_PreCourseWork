/*'Hello I am Vance'
let age = 40;
age;
const otherAge = age;

const x = 7;
const y = 2;
const add = true;

if (add) {
  console.log(x+y);
} else {
  console.log(x - y);
}


const x = 7;
const y = 2;
const add = true;

if (add) {
  let z = x + y;
  console.log(z);
}
z;

console.log("Hello World");*/

/*let address = "347 E 105th";
if (address) {
  console.log('Letter sent!');

} else {
  console.error('Address not found!');
}*/

//Logical opporators

//not operator
//!true; ! is the not value
//!(2<4);

// or operator ||
/*const hasCar = false;
const hasBike = true;

const canGetToParty = hasCar || hasBike;
canGetToParty;
*/


//and operator
/*const hasCar = true;
const madeFood = false;

const canGetToParty = hasCar && madeFood;
canGetToParty;*/

//and and or operators

/*const hasCar = true;
const hasBike = false;
const madeFood = true;

const canGetToParty = (hasCar || hasBike) && madeFood;
canGetToParty;*/

//elseif statements

/*const hasCar = false;
const hasBike = true;
const madeFood = true;

note: !madeFood is false boolean value
if (!madeFood) {
  console.log("I forgot to make food")

} else if (!hasBike && !hasCar){
 console.log ("I need to a ride");

} else {
  console.log("Party On!");
}*/

//DRY - Don't Repeat Yourself


/*console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log(0);
*/

//For Loop

for (let i=20; i > 0; i = i - 2){
  //continues don't exist outside for loops
  //when wanting to skip you can use continue
  continue;
  //break will break the loop if value is //appeared
  break;
  console.log(i)
}

for (let i = 0; i<10; i++) {
  console.log(i);
}
