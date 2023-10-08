//if else statement
function testNum(z) {
    let result;
    if (z > 0) {
      result = 'Positive';
    } else {
      result = 'Not positive';
    }
    return result;
  }
  document.getElementById("Test").innerHTML = testNum(5);

  //Nested if
  function testpassword() {
      if (password = 1234) {
        result = "Login Successful.";
    } else {
      if (password = 123) {
        result = "Invalid password.";
    }else {
        result = "Account doesn't Exist.";
    }
}
return result;
}
document.getElementById("Test1").innerHTML = testpassword(1234);

//switchcase
function chat(me) {
switch (me) {
  case "Apa Kabar?":
    result = "Baik";
    break;
  case "Bagaimana Kabar mu?":
    result = "Kurang Baik";
    break;
  default:
    result("Empty action received.");
    break;
}
return result;
}
document.getElementById("Test2").innerHTML = chat ("Bagaimana Kabar mu?");

//for statement
const hobby = ["Vollyball", "Watchting Film", "Baseball", "Singing"];
let i = 1;
let len = hobby.length;
let favorite = "";
for (; i < len; ) {
  favorite += hobby[i + ""] + "<br>";
  i++; 
}
document.getElementById("Test3").innerHTML = favorite; //result dari statement

//while statement
const music = ["Jazz", "Rock", "Dangdut", "Pop", "Koplo"];
let text = "";
let n = 2; 
while (n < music.length) {
  text += music[n] + "<br>";
  n++;
}
document.getElementById("Test4").innerHTML = text;

//do while
let answer = '';
let s = 0;
do {
  answer  += s + "<br>";
  s++
} while (s < 12);
document.getElementById("Test5").innerHTML = answer;

//function
const myFunction = new Function("x", "y", "return x * y"); 
document.getElementById("Test6").innerHTML = myFunction(8, 3); 


