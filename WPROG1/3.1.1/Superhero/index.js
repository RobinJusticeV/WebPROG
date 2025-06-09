//superhjälte spel med två hjältar. Du kan see deras stats med en knapp
const d = new Date;

let batman = {name: "Batman", hp: 100, attack: 15, power: false, birthDate: new Date("1939-03-30")
};

let superman = {name: "Superman",
hp: 120, attack: 10, power: true, birthDate: new Date("1938-06-01")
};

//visar statsen på hjältarna på "demo" elementet
function showStats() {
    let supermanStats = superman.name + "<br>" + "Health: " + superman.hp + "<br>" + "Attack: " +
    superman.attack + "<br>" +"Power: " + superman.power + "<br>" +"Born: " + superman.birthDate.toDateString();

    let batmanStats = batman.name + "<br>"+"Health: " + batman.hp + "<br>" + "Attack: " + 
    batman.attack + "<br>" + "Power: " + batman.power  + "<br>" +"Born: " + batman.birthDate.toDateString();

    document.getElementById("superman").innerHTML = supermanStats;
    document.getElementById("batman").innerHTML = batmanStats;
}

