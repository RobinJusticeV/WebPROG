//en lista av vänner i form av string skapas, samt en variabel för Ross. 
//Räknar hur lång variabeln är i tecken, samt hur många vänner som finns i listan och multiplicerar den
//sist är en regex som byter ut Geller mot Green.

var friends = ["Joey", " Chandler", " Ross", " Monica", " Rachel"];
var ross = "Ross Geller";
let rossLength = ross.length;
let size = friends.length;

let multiply = size * rossLength;

let n = ross.replace(/Geller/i, "Green");




document.getElementById("demo").innerHTML = "How many friends: " + size  +
 "<br>"+ "Names of friends: "+ friends + "<br>" +
 "Length of Ross' name: "+ rossLength + "<br>" + "Ross friends x characters in his name: "
  + multiply + "<br>" + "Ross before marriage: "+ ross + " vs. "+ "Ross after marriange: "+ n;
