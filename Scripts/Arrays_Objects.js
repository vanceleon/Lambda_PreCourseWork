
// getThird takes in an array
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

const array1 = [
  "Food",
  "Clothes",
  "Video Games",
  "Trips"
];

function getThird(array1) {
    return array1[2];
}
getThird(array1);


// stringLengths takes in four strings
// it returns an array containing the length of each string
// Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6]


function stringLengths(str1, str2, str3, str4) {
  const word1 = str1.length;
  const word2 = str2.length;
  const word3 = str3.length;
  const word4 = str4.length;

  const array2 = [
  word1,
  word2,
  word3,
  word4
  ];
  return array2;
}
stringLengths("Food","Clothes","Video Games","Trips");


// removeFirst takes in an array
// it returns the same array, but with the first item removed
// Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
//          return ['toad', 'cricket', 'skunk']

const array3 = [
  "Food",
  "Clothes",
  "Video Games",
  "Trips"
];

function removeFirst(array) {
  array.shift();
  return array
}
removeFirst(array3);

// swap takes in an array and two indices
// it returns the array with the items at i and j swapped
// Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
//          return ['skateboard', 'scooter', 'unicycle', 'canoe'];


const array4 = [
  "Food",
  "Clothes",
  "Video Games",
  "Trips"
];

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}
swap(array4, 0, 2);


// getValue takes in an object and a key name
// if the key exists in the object, return the value of that key
// if not, return null
// Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last')
//          would return 'Peppermill'


const obj2 = {
  name: 'Ally Smith',
  age: 27,
  job: 'hypnotist',
  location:'New York'
  }


function getValue(objt, key) {
  if (objt.hasOwnProperty(key)){
    return objt[key];
  } else {
    return null;
  }
}
getValue(obj2, 'school');


// generateCSS takes in three strings containing CSS values
// it returns an object with the CSS key value pairs
// Example: generateCSS('100px', '70px', 'blue') would return
//          { height: '100px', width: '70px', color: 'blue' }



function generateCSS(height, width, color) {
  const cssObj = {
    height: height,
    width: width,
    color:color,
  }
  return cssObj;
}
generateCSS("200px","500px","blue");

// getValues takes in an objects
// it return an array containing the values from that object
// Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
//          would return ['Ally', 27, 'hypnotist']

const obj1 = {
  name: 'Tim',
  location: "North Carolina",
  age: 37,
  job: 'Software Engineer'}

function getValues(obj) {
  return Object.values(obj);

}
getValues(obj1);
