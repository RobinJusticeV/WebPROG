//tre stegs program med window objekt.
//steg 1 leker med alerts
//steg 2 leker med promts
//steg 3 leker med öppmna och stänger fönster.

let personName;
let Window;
let myTime;
let timeout;

//skriver ut det som finns inne i id #demo samnt stringen Alert... under ett intervall på 5 sekunder
function myFunction() {
    timeout = setTimeout(myAlert, 5000);
    document.getElementById("demo").innerHTML = "Alert incoming in 5 sec."
  }

function myAlert(){
    window.alert("Here i am, you didnt cancel me hehe");
    
}

//Gör så att ovanstående funktion inaktiveras, samnt confirm med ett fönster.
setTimeout, clearTimeout
function myConfirm(){
    
    window.confirm("Thank you for saving me\nEither OK or Avbryt.");
    clearTimeout(timeout);
}

//tar in valuen för namnet och länkar till min instagram var 5.e sekund. Anropar mySpam innut i setInterval
function myPromt(){
    personName = prompt("What's your name: ", "Jeff");
    
    if(personName != null){
        
        document.getElementById("demo").innerHTML = "Hi " +  personName + " my instagram will appear every 5 seconds, and continue hehe :), try closing it ";
        myTime = setInterval(mySpam, 5000); 
    }
    
    
}

//Öppnar nytt fönster med min instagram, anropas i myPromt()
function mySpam() {
    Window = window.open(
        "https://www.instagram.com/robin.akyuz/", "hello new iwndow","width=300,height=500");
}

//stänger av spamm av min instagram
function myStop() {
    clearInterval(myTime);

}

//Öppnar ett nytt fönster
function myOpen() {
    Window = window.open(
        "", "hello new iwndow","width=400,height=600");
        Window.document.write("<p>What's up guys, im a window!</p>");
        
        
}

//Stänger det nya fönstret
function myClose(){
    Window.close();
    
}




