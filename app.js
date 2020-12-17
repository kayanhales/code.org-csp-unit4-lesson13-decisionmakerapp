//variables
var name;
var money;
var age;

//default value of money = 10
setNumber("moneyInput", 10);

//name event handler
onEvent("nameInput", "input", function( ) {
  name = "Hi "+getText("nameInput") +"!";
  setText("decision", name);
  updateScreen();
});


//money UP event handler
onEvent("moneyUp", "click", function( ) {
  money = getNumber("moneyInput") + 10;
  setNumber("moneyInput", money);
  updateScreen();
});

//money DOWN event handler
onEvent("moneyDown", "click", function( ) {
  money = getNumber("moneyInput") - 10;
  setNumber("moneyInput", money);
  updateScreen();
});


//age event handler
onEvent("ageInput", "input", function( ) {
  age = getNumber("ageInput");
  setNumber("ageInput", age);
  updateScreen();
});


//updateScreen function
function updateScreen() {
  //if age < 10, then tell the user they are not old enough
  if (age < 10) {
    setText("decision", name+" Sorry, you aren't old enough. Wait until you are 10.");
  }
  //if money < 40, then tell the user they don't have enough money
  else if (money < 40) {
    setText("decision", name+" Sorry, you don't have enough money. Try again with at least $40.");
  }
  //if age >= 10 and <= 16 AND money >=40, then tell the user they can adopt kittens
  else if(age >= 10 && age <=16 && money >=40){
    setText("decision", name+" You can adopt "+ Math.floor(money/40) +" kitten(s).");
  }
  //if age > 16 AND money >= 40, then tell the user they can adopt cats
  else if (age>16 && money >=40){
    setText("decision", name+" You can adopt "+ Math.floor(money/40) +" cat(s).");
  }
  //otherwise, ask user for their age and how much money they have
  else{
    setText("decision", name+" Select your age and/or the amount of money you have.");
  }
}
