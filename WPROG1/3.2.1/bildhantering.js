// Mitt program är en bladning av jQUery med JS för att skapa ett bild galleri med två delar. En med musevent och den andra med ett intervall.
//Bilderna är hämtad från "Pexels", dessa bilder kräver inget referat till skaparen.
$(document).ready(function() {

    const hundBilder = ["bilder/pexels_golden.jpg","bilder/pexels_gshep.jpg", "bilder/pexels_samoyed.jpg" ]
    let counter = 1;
    
    //ändrar bild varje mouseenter, med hjälp av räknare och attr taggen - jQuery
    $("#pictureHolder").mouseenter(function(){

        $(this).css({
            "border": "5px solid azure",
            "border-radius": "2px"        
        });
        
        $("#pictureHolder").attr("src",hundBilder[counter]);
        counter += 1;

        if(counter >= hundBilder.length){
            counter = 0;
        }
        
        
    });
    //kopierad kod från ovan, denna metod ändrar bilden i arrayen med en 3000ms intervall istället för musevent
    setInterval(function(){

        $(this).css({
            "border": "5px solid azure",
            "border-radius": "2px"        
        });
        
        $("#pictureInterval").attr("src",hundBilder[counter]);
        counter += 1;

        if(counter >= hundBilder.length){
            counter = 0;
        }
        
        
    },3000);
      



});