//jag har tittat på w3schools hemsida på hur man göra tabs, och gjort min egna twist om färg koder för varningar


//funktionen anropas vid klick på knapparna och visar, sedan gömmer tab/panelen.
//sedan tar den bort active statusen med forloopen och sist aktivitet genom klassen och visar innehållet i blockform . 
function openPanel(evt, panelId) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(panelId).style.display = "block";
    evt.currentTarget.className += " active";
}