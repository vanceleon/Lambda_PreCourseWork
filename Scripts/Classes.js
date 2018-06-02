//Dry - Don't Repeat yourself


//WHat not to do
// javascript object
// const ninjaAssassin = {
//   codename: "Hollow Eyes",
//   weapon: "katana",
//   stealthy: true,
//   headCount: 0,
//   kill: function() {
//     this.headCount++;
//   },
// };

// // ninjaAssassin.headCount = 45;
// // ninjaAssassin;

// // ninjaAssassin.codename.length;
// //ninjaAssassin.codename.length; properties with object

// const characterAssassin = {
//   codename: 'The Politican',
//   weapon:'rhetoric',
//   stealthy: false,
//   headCount: 0,
//   kill: function() {
//     this.headCount++;
//   },
// };


// const characterAssassin = {
//   codename: 'The Politican',
//   weapon:'spirit magic',
//   stealthy: false,
//   headCount: 0,
//   kill: function() {
//     this.headCount++;
//   },
// };
//What not to do ^^



// Assassin type (class is a way to create your own types), to not repeat yourself

//Always capitalize first word in a Class
// const Assassin = function(codename, weapon, stealthy){
//   //this = {} is creating an object
//   this.codename = codename;
//   this.weapon = weapon;
//   this.stealthy = stealthy;
//   this.headCount = 0;
//   //return this
//   //inserting method into class, not best way
//   // this.kill = function() {
//   //   this.headCount++;
// //  };
// };
// //best way to insert function, prototype
// //Assassin is rulebook on how to build assassin
// //.prototype method storage bank for classes
// Assassin.prototype.kill = function(){
//   //this is important because
//   //Assassin is a rulebook,this is an instance
//   this.headCount++;

// };

// Assassin.prototype.deceive = function() {
//   console.log('I am not here to kill you');
// };

// //created object in streamlined way
// //specific classes
// const ninjaAssassin = new Assassin('Hollow Eyes', 'katana', true);
// const characterAssassin = new Assassin('The Politician', 'rhetoric', false);
// const ghostAssassin = new Assassin('The Wraith', 'spirit magic', true);

// //console.log(ninjaAssassin, characterAssassin, ghostAssassin);


// //new key word

// //methods
// // ninjaAssassin.kill();
// // ninjaAssassin.kill();
// // ninjaAssassin.kill();

// ninjaAssassin.kill();
// ninjaAssassin.deceive();
// //this pertains to any of the classes the function is tide to
// ninjaAssassin;




const array = [2, 5, 6, 4, 9];
const chars = ['a','d','j'];

//if wanted to pop off second item
Array.prototype.returnSecond = function() {
  const secondItem = this[1];
  return secondItem;
};

Array.prototype.popSecond = function(i) {
  //pop logic
}
array.returnSecond();
chars.returnSecond();
