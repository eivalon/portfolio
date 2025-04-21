function swapVariable() {
  var a = "3";
  var b = "8";

  var c = a;
  a = b;
  b = c;

  console.log("a is " + a);
  console.log("b is " + b);
}

swapVariable();

function formatName() {
  var name = "enrico";
  name = name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase();
  console.log(name);
}

formatName();

function ageCalculator(age) {
  var years = 90-age;
  var days = years * 365;
  var weeks = years * 52;
  var months = years * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

ageCalculator(12);

function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  //console.log("Your BMI is " + Math.round(bmi));
  return bmi;
}

var bmi = console.log("Your BMI is " + Math.round(bmiCalculator(65, 1.8)));