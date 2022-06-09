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
// want to create a menu with people on it, and when someone is added they
//are added to this menu. first their name is created, and then 
// their language spoken + language, etc, are added. 
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
var att; // number of attributes (eyeColor)
var value;
// key in people is number of people

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

window.onload = function() {
  var overarchingDetails = document.getElementById("details");
  var peeps = document.getElementById("sum");
  var detailsSmaller = document.createElement("DETAILS");
  var summaryPerson = document.createElement("SUMMARY");
  var personName = document.createTextNode("Person Name");
  summaryPerson.append(personName);
  var personDescription = document.createTextNode("Description of person");
  detailsSmaller.append(summaryPerson);
  detailsSmaller.append(personDescription);
  overarchingDetails.append(peeps);
  overarchingDetails.append(detailsSmaller);
}

function appendRow(value, peopleArray) {
  console.log(value, peopleArray);
  tbl = document.getElementById("table").getElementsByTagName("tbody")[0];
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = value;
  var cell2 = row.insertCell(1);
  cell2.innerHTML = peopleArray.join(', ');
}
    