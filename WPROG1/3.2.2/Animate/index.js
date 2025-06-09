//Programmet har en animate event på den röda fyrkanten, tryck på kanppen för att starta!

$(document).ready(function() {

    
//vid klick rör sig dne röda knappen 250 px höger, ökad i höjd till 500px, och bredd till 200px
// sedan animeras den tillbaka till ursprung
    $("#aniButton").click(function(){
        $("#aniSquare").animate({
            right: '250px',
            height: "500px",
            width: "200px",
        }, 2000, "linear", function() {
            alert("Resetting, im coming back now!");

            $("#aniSquare").animate({
                left: "0px",
                height: "100px",
                width: "100px"
            
            },1000);
        });
    });

      

});
