var eyeColor;
var arrayOfPeople = [];
var personArray = []; //array used for people in their categories.
class Person {
  constructor(eyeColor, hairColor, languageSpoken, name) {
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.languageSpoken = languageSpoken;
    this.name = name;
  }
}

function addPerson (eyeColor, hairColor, languageSpoken, name) {
  var pers = new Person(eyeColor, hairColor, languageSpoken, name);
  arrayOfPeople.push(pers);
}

addPerson('blue', 'brown', 'english', 'julie');
addPerson('brown', 'blonde', 'english', 'john');
addPerson('brown', 'brown', 'spanish', 'fred');
addPerson('green', 'blonde', 'english', 'george');

var people = {};
people['julie'] = new Person('blue', 'brown', 'english', 'julie');
people["john"] = new Person('brown', 'blonde', 'english', 'john');
people["fred"] = new Person('brown', 'brown', 'spanish', 'fred');
people["george"] = new Person('green', 'blonde', 'english', 'george');


var attributes = {};
var person;
var val; //all of the different attributes
var att; // attributes (eyeColor)
var value;
// key in people is people objects in order

for (key in people) {
  person = people[key];
  for (att in person) {
    if (att == "name") {
      continue;
    }
    if (!attributes.hasOwnProperty(att)) {
      attributes[att] = {};
    }
    val = person[att];
    if (!attributes[att].hasOwnProperty(val)) {
      attributes[att][val] = [];
    }
    attributes[att][val].push(person.name);
  }
}

//var att = eyeColor;
var identity;
Person.prototype.toString = function personToString() {
  var trait = "";
  identity = people[pers];
  for (i = 0; i < arrayOfPeople.length; i++) {
    for (att in attributes) {
      trait += att + ": " + identity[att] + " ";
    }
    trait = pers + " " + trait;
    return trait;
  }
}

var number;
var tbl;
var name;

window.onload = function() {
  document.getElementById("sort").onclick = function() {
    // determine which item is checked
    if (document.querySelector('[id = "eyeColor"]:checked')) {
      att = 'eyeColor';
    }
    if (document.querySelector('[id = "hairColor"]:checked')) 
    {
      att = 'hairColor';
    }
    else if (document.querySelector('[id = "languageSpoken"]:checked')) {
      att = 'languageSpoken';
    }
    document.getElementById("firstColumnName").innerHTML = att;
    document.getElementById("sorted").innerHTML="";
    //console.log(attributes[att]);
  
    var attValues = attributes[att];
    for (value in attValues) {
      personArray = attValues[value];
      appendRow(value, personArray);
    }
  }
}
var a;
var p;
var person;


function createPeople(personArray) {
  var cellContents = [];
  for (p in personArray) {
    pers = personArray[p];
    a = createPersonCard(people[pers]);
    cellContents.push(a);
  }
  return cellContents;
}

function createPersonCard(pers) {
  attString = pers.toString();
  return attString;
}

function appendRow(value, personArray) {
  // console.log('appendRow', value, personArray);
  tbl = document.getElementById("table").getElementsByTagName("tbody")[0];
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = value;
  var cell2 = row.insertCell(1);
  console.log('====================', value);
  var arrayOfToStrings = createPeople(personArray)
  cell2.innerHTML = arrayOfToStrings.join(', ');
}
    