//Programmet har en två delar, en del som gömmer och tar fram en paragraph med knappar och en toggle
//den andra delen har fyra knappar som visar en regnbåge av fyrkanter

$(document).ready(function() {

    
    //visar texten
    $("#gömKnapp").click(function(){
        $("#visText").hide();
      });
    //gömmer texten
    $("#visaKnapp").click(function(){
        $("#visText").show();
    });
    //togglar texten
    $("#toggleKnapp").click(function(){
        $("#visText").toggle();
    });


    //fader in regnbågen vid klick
    $("#fadeIn").click(function(){
        $("#square1").fadeIn();
        $("#square2").fadeIn();
        $("#square3").fadeIn();
        $("#square4").fadeIn();
        
    });

    //fader ut regnbågen vid klick
    $("#fadeOut").click(function(){
        $("#square1").fadeOut();
        $("#square2").fadeOut();
        $("#square3").fadeOut();
        $("#square4").fadeOut();
        
    });

    //fader ut regnbågen med toggle vid klick
    $("#fadeToggle").click(function(){
        $("#square1").fadeToggle();
        $("#square2").fadeToggle();
        $("#square3").fadeToggle();
        $("#square4").fadeToggle();
        
    });

    //ändrar opacity på regnbågen
    $("#fadeTo").click(function(){
        $("#square1").fadeTo(1000, 0.2);
        $("#square2").fadeTo(1000, 0.4);
        $("#square3").fadeTo(1000, 0.6);
        $("#square4").fadeTo(1000, 0.8);
        
    });


    



});
