var eyeColor;
class Person {
  constructor(eyeColor, hairColor, languageSpoken, name) {
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.languageSpoken = languageSpoken;
    this.name = name;
  }
}

var personArray = [];
function addPerson (eyeColor, hairColor, languageSpoken, name) {
  var pers = new Person(eyeColor, hairColor, languageSpoken, name);
  personArray.push(pers);
}

var people = {};
people['julie'] = new Person('blue', 'brown', 'english', 'julie');
people["john"] = new Person('brown', 'blonde', 'english', 'john');
people["fred"] = new Person('brown', 'brown', 'spanish', 'fred');
people["george"] = new Person('green', 'blonde', 'english', 'george');

var attributes = {};
var person;
var val;
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
  window.onload = function() {
  document.getElementById("sort").onclick = function() {
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
    
    var stuff;
    var arrayOfValues = [];
    stuff = JSON.stringify(att);
    //console.log(stuff);
    for (value in attributes[att]) {
      if (document.querySelector('[id =' + stuff + ']:checked')) {
      arrayOfValues.push(value);
      }
    }
    for (var j = 0; j < arrayOfValues.length; j++) {
      appendRow();
    }
    function appendRow() {
    tbl = document.getElementById("table"), row = tbl.insertRow(tbl.rows.length), i;
    for (var i = 0; i < tbl.rows[0].cells.length; i++) {
      createCell(row.insertCell(i), i, 'row');
      if (tbl.rows.length > arrayOfValues.length + 1) {
      tbl.deleteRow(1);
    }
    }
    }
    
    function createCell(cell, i) {
      var div = document.createElement('row'), i;
      var txt;
      if (i == 0) {
        txt = document.createTextNode(arrayOfValues[j]);
      }
      else if (i == 1) {
        txt = document.createTextNode('row');
      }
        div.appendChild(txt); 
       cell.appendChild(div);
    }
  }
}