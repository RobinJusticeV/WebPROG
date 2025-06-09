
var xhttp = new XMLHttpRequest();
var input1;
var input2;
// Först skapar vi ett objekt för http förfrågan.
// Functionen väntar på readystate funktionen innen den körs, med if-satsen. 
//responText skickar svaret som en string, och i open() funktionen ger vi
// parametrarna GET-posten och sedan URL från uppgiftsbeskrivningen.

function sendXHTML(){

    

    input1 = document.getElementById('input1').value;
    input2 = document.getElementById("input2").value;

    if (!input1 || !input2) {
        document.getElementById('p1').innerText = "Please enter both fields!";
        return;
    }
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){        
            document.getElementById("p1").innerHTML = "The Result is: "+ input1 + " + "+ input2 + " = " + xhttp.responseText;
        }

    };
    // xhttp.open("GET", "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=123&number2=456", true);
    xhttp.open("GET", "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=" + input1 + "&number2=" + input2,true);
    xhttp.send();

}



// //jag testade att använda jQuery för uppgiften.
// $(document).ready(function(){

//     // $("button").click(function(){
//     //   $("#p1").load("https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=123&number2=456" );
//     // });
//   });

