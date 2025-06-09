$(document).ready(function(){

  //detta program har fyra steg. Steg 1 är en knapp som hämtar texten i paragraphen. 
  //Steg2 är samma sak fast att den har preventDefault() metoden
  //Steg 3 är en inputfield som visar vad du har skrivit
  //Steg 4 reagerar på om du ändrar window size och byter css attribut.¨
  //Steg 5 är en keyevent och visar value av inputfielden

  $("#btn1").click(function(){
    alert("TEXT: " + $("#paraElement").text());
  });


  $("#btnError").click(function(e){
    e.preventDefault();
    alert('Button clicked, but default action prevented');
    
  });

  $("#btn2").click(function(){
    alert("You typed: " + $("#geo").val());

  
  });

  $("input").blur(function(){
    $(this).css("background-color", "#CCCCCC");
  });

  $("input").focus(function(){
    $(this).css("background-color", "azure");
  });

  $(window).resize(function(){
    $("#resizer").css("background-color", "red ");
    $("#resizer").text("HELLO, STOP MOVING ME");
  })

  $("#inputKey").keyup(function(){
    alert("You pressed: " + $("#inputKey").val());

  
  });
  
});