/* === DO NOT ALTER CODE BELOW THIS LINE UNTIL LINE 88 === */
// HtmlElement is a javascript class that represents an HTML element
// It's constructor takes in two arguments: type and text
// type is the type of element (example div, p, span, h1, etc)
// text is an optional argument and represents any text in the element
const HtmlElement = function(type, text) {
  this.type = type;
  this.text = text || "";
  this.id = null;
  this.classes = [];
  this.children = [];
};

// The addID method will add an id to an HTML element
// If an id already exists, it will overwrite it.
HtmlElement.prototype.addID = function(id) {
  this.id = id;
};

// The addClass method will add a class to an HTML element
// addClass can be called multiple times to add difference classes
HtmlElement.prototype.addClass = function(className) {
  this.classes.push(className);
};

// The addChild method will add children elements
// The argument must be an HtmlElement object
HtmlElement.prototype.addChild = function(element) {
  if (!(element instanceof HtmlElement)) {
    throw new Error('Invalid argument for addChild method');
  }

  this.children.push(element);
};

// The toString method returns a string version of the HTML element
// Note: The following code is quite complicated
// While you can use this method to check your work,
// there is no need to read through it or understand it
// (until you get the stretch question)
HtmlElement.prototype.toString = function() {
  const openingTag = getOpeningTag(this.type, this.id, this.classes);
  const closingTag = "</" + this.type + ">";

  return openingTag + this.text + closingTag;

  function getID(id) {
    if (!id) {
      return "";
    }

    return "id=\"" + id + "\"";
  }

  function getClasses(classes) {
    if (!classes.length) {
      return "";
    }

    const classList = classes.reduce(function(string, name) {
      return string + ' ' + name;
    });

    return "class=\"" + classList + "\"";
  }

  function getOpeningTag(type, id, classes) {
    const idText = getID(id);
    const classText = getClasses(classes);

    let text = type;

    if (idText) {
      text += " " + idText;
    }

    if (classText) {
      text += " " + classText;
    }

    return "<"+text+">"
  }
};

/* === DO NOT ALTER ANY CODE ABOVE THIS LINE === */


// Question 1: Create following instances of HtmlElement.
//             You will need to use the method of addID and addClass.
//             The toString method may be used to check your work.
//
//  a. <p>To every action there is an equal and opposite reaction.</p>
//  b. <h1 id="main">Welcome to the Webpage</h1>
//  c. <div class="container important"></div>
//  d. <li id="first-item" class="stir-fry">Scallion</li>
//  e. <span id="CTA" class="inline important"></span>

//1) instance: new class
//2) calling a function on instance
// Assign the following variables correctly:
const elementA = new HtmlElement('p', 'To every action there is an equal and opposite reaction.');
const elementB = new HtmlElement('h1','Welcome to the Webpage');
const elementC = new HtmlElement('div',"");
const elementD = new HtmlElement('li','Scallion');
const elementE = new HtmlElement('span', "");

elementB.addID('main');
elementC.addClass('container important');
elementD.addID('first-item');
elementD.addClass('stir-fry');
elementE.addID('CTA');
elementE.addClass('inline important');

// Question 2: Create an element that represents the following ordered list.
//             You will need to create an new element for each of its children
//             and add them to their parent using the addChild method.
//             Note that the toString method won't fully work on elements with
//             children (see stretch question).
//
// <ol id="world-domination">
//   <li> Discover the secret to prime factorization </li>
//   <li class="illegal"> Hack through online banking security </li>
//   <li class="illegal"> Blackmail all the major global leaders </li>
//   <li> World domination </li>
// </ol>

const stepsToWorldDomination = new HtmlElement('ol');
const childElement1 = new HtmlElement('li','Discover the secret to prime factorization');
const childElement2 = new HtmlElement('li','Hack through online banking security');
const childElement3 = new HtmlElement('li','Blackmail all the major global leaders');
const childElement4 = new HtmlElement('li','World domination');

//add ids first to each child
stepsToWorldDomination.addID('world-domination');
childElement2.addClass('illegal');
childElement3.addClass('illegal');


//adding to the parent
stepsToWorldDomination.addChild(childElement1);
stepsToWorldDomination.addChild(childElement2);
stepsToWorldDomination.addChild(childElement3);
stepsToWorldDomination.addChild(childElement4);



// Question 3: Write the removeClass method on the HTMLElement class.


// The removeClass method will remove a class from an element
// by removing that class name from the this.classes array
// Example: if element.children were equal to ['inline', 'important']
//          and you called element.removeClass('inline'), afterward
//          element.children would be equal to ['important']  (not effecting children, effecting classes)


//splice, remove items from arrays
//this.classes instance is now variable to interact with
HtmlElement.prototype.removeClass = function(className) {
  let classes = this.classes;
  // TODO
  if (classes.includes(className)) {
    //find what the index of className
    //once information is found you can then do splice
    const indexClass = classes.indexOf(className);
    classes.splice(indexClass,1);
  }

};




//HtmlElement.prototype.removeAllClasses = function() {
//   //this.removeClass dynamically iterate until all classes have been removed
// };

// STRETCH QUESTION (NOT REQUIRED)
// Question 4: Update toString
//
// As you notice in Question 2 toString does not work for elements with children.
// Your job is to update the method so that it prints the element containing it's children.
// The first step will be to spend some time reading through the existing code and understanding it.
//
// Note: The string should not include any new lines or tabbing.
//
// Example: stepsToWorldDomination.toString() should yield:
// "<ol id="world-domination"><li>Discover the secret to prime factorization</li><li class="illegal">Hack through online banking..."
// (Full string not shown because it would be super long, but you get the point...)
