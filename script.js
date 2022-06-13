var eyeColor;
var arrayOfPeople = [];
var personArray = [];
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
var number;
var tbl;
var name;

var totalArray = [];
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
      //totalArray.push(personArray);
      appendRow(value, personArray);
      //createPeople(people);
    }
  }
}

function createPeople(personArray) {
  for (p of personArray) {
    person = people[p]
    createPersonCard(person);
  }
}

var box;
function createPersonCard(person) {
  for (att in person) {
    console.log(att + ':' + person[att]);
  }
}
var socks = 5;
function toString() {
  
}
socks.toString();

function appendRow(value, peopleArray) {
  //console.log(value, peopleArray);
  tbl = document.getElementById("table").getElementsByTagName("tbody")[0];
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = value;
  var cell2 = row.insertCell(1);
  console.log('====================', value);
  
  createPeople(peopleArray);
  cell2.innerHTML = peopleArray.join(', ');
}
    