$(document).ready(function() {

    //när användaren hovrar ändras färgen samt texten.
    $("#hoverArea").hover(function() {
            $(this).css("background-color", "darkred");
            $(this).text("Currently hovering!");

            //med denna jQuery metod trackar vi på vilken x och y axel musen är på - koordinaten.
            $(this).mousemove(function(event) {
                $("#coordinates").text("X: " + event.pageX + ", Y: " + event.pageY);
            });
        }, function() {
            $(this).css("background-color", "red");
            $(this).text("Hover over me!");

            

            // när anvädaren tar bort musen ur fyrkanten ges en alert.
            
            alert("You left the area, Get back there, or you'll lose!");
        }
    );

    $("#deactivateBtn").click(function() {
        $("#hoverArea").off("mousemove");
        $(this).text("Tracking deactivated");
    });
});
