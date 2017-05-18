var clerks = ["Eli", "Roy", "Dan"];
var managers = ["Matan", "Tom", "John"];
var ceo = ["Brandon", "Efrat"]; // where to promote them??
var board_members = []; // i guess here?
var fired = []; // demotion of clerks?

function promotion(name) {
  for (var i = 0; i < clerks.length; i++){
    if (name === clerks[i]) {
      managers.push(name);
      clerks.splice(i,1);
      return;
    }
  }
  for (var j = 0; j < managers.length; j++){
    if (name === managers[j]) {
      ceo.push(name);
      managers.splice(j,1);
      return;
    }
  }
  for (var k = 0; k < ceo.length; k++){
    if (name === ceo[k]) {
      board_members.push(name);
      ceo.splice(k,1);
      return;
    }
  }
}

function demotion(name) {
  for (var i = 0; i < clerks.length; i++) {
    if (name === clerks[i]) {
      fired.push(name);
      clerks.splice(i,1);
      return;
    }
  }

  for (var j = 0; j < managers.length; j++) {
    if (name === managers[j]) {
      clerks.push(name);
      managers.splice(j,1);
      return;
    }
  }

  for (var k = 0; k < ceo.length; k++){
    if (name === ceo[k]) {
      managers.push(name);
      ceo.splice(k,1);
      return;
    }
  }
}

promotion("Matan");
promotion("Brandon");
demotion("Roy");
demotion("Tom");

console.log(fired);
console.log(clerks);
console.log(managers);
console.log(ceo);
console.log(board_members);
