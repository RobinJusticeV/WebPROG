//detta program är en pt hemsida med olik atyper av funktioner, dessa finns detaljerade i beskrivning.pdf och längre ned i dokumentet
$(document).ready(function(){

    const carouselImg = ["bilder/robin_pt.jpg", "bilder/pexels-jessica.jpg", "bilder/pexels-george.jpg"];

    let counter = 1;

    let robinTxt = "This is Robin, he is a 20 year old CS major who usually goes to the gym in his spare time. He LOVES cooking and is our main dieting coach, who will exeec your expectations when it comes to cooking. His motto is, you will love food even more when your dieting like us at MyPT. Giving you a package of combinations of healthy and good tastig food, that are backed up by science. ";

    let jessicaTxt = "This is Jessica, she is a 35 year old mom and trainer. She is the head coach of losing weight, and will help you tailor your workout schedule to make it fit your lifestyle while also making you lose weight and look lean the scientific way."

    let georgeTxt = "This is George, he is a 29 year old science based weight lifter and is our 'Master of Weights' and can teach you how to lift weights and gain plenty of muscle while making sure you avoid injuries. He will help you tailor a science based training schedule.";

    //Vid klick på bildhållaren går den igenom arrayen och ändrar src attirbutet till bilderna i arrayen. 
    $("#robinImg").click(function(){

        changePicture(false);

    });


    //funktionen ändrar bilden, beroende om parametern är true eller false.
    function changePicture(randomTrainer){

        if(randomTrainer == true){

            counter = Math.floor(Math.random() * 3);

        }

        $("#robinImg").attr("src", carouselImg[counter]);
        counter++;

        if(counter >= carouselImg.length){
            counter = 0;
        }
        
        if(counter == 1){
            $("#introText").html(robinTxt);
        }
        else if (counter == 2){
            $("#introText").html(jessicaTxt);
        }else{
            $("#introText").html(georgeTxt);
        }
    
        $("#robinImg").animate({
            height: '+=30px',
            width: '+=100px'
        },500 );
    
        $("#robinImg").animate({
            height: '-=30px',
            width: '-=100px'
        },700);
    }
        


    //mouseenter och mouseleave functioner som ökar knappens 
    //storlek med 1.6 över 0.6 sekunder. Sedan "revertar" den tillbak till den usprungliga storleken.
    $("#submitArt").mouseenter(function() {
        $("#submitBtn").css({
            "transform": "scale(1.2)",
            "transition": "transform 0.6s"
        });
    });
    
    $("#submitArt").mouseleave(function() {
        $("#submitBtn").css({
            "transform": "scale(1)",
            "transition": "transform 0.6s"
        });
    });


    $("#submitBtn").click(function() {

        if ($("#name").val() === "" || $("#mejladress").val() === "" || $("#message").val() === "") {
            alert("Fill in all inputs before submitting!");
        } else {
            confirmFunc();
        }
    });

    //jag bröt ut funktionen så att click på submitbtn anropar denna function -> mer läsbart + återanvända funktionen i framtiden.
    function confirmFunc (){

        confirm(
            "Name: " + $("#name").val() + "\n" +
            "E-mail: " + $("#mejladress").val() + "\n" +
            "Message: " + $("#message").val()
        );
    }

    //anropar changpicture funktionene på knappen med en randomizer.
    $("#randomBtn").click(function() {

        changePicture(true);
    });
    


});
  



  