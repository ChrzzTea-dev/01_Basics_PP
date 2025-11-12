
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/



const prompt = require('prompt-sync')({sigint: true});



let hi = prompt("Willkommen bei MD möchten sie bestellen ? "); // Variable für die Eingabe des Kunden
let bestellungistfertig = false;



hi = hi.toLowerCase().trim();

while(bestellungistfertig === false){


    if (hi === "ja") {
        console.log("Ja sehr gerne.")
        bestellungistfertig = true;
    }
    else if (hi === "nein"){
        console.log("nein ich schaue noch danke")
        bestellungistfertig = false;
        hi = prompt("Wissen sie jetzt was sie möchten ja?")
        break;
    }
    else {
        console.log("dann schauen sie sich nochmal die Karte an und sagen ja/nein ")
        
        hi = prompt("Haben sie sich jetz entschieden zu bestellen ?")
    }
}
let burger = prompt("Welchen Burger möchten sie  die 1.(Cheeseburger) ,2.(Hamburger) oder 3.(Chillicheeseburger)? ");

if (burger == 1) {
    console.log("einen Cheeseburger bitte")
}
else if (burger == 2){
    console.log("einen Hamburger bitte ")
}

else if(burger == 3 ){
    console.log("einen Chillicheeseburger bitte");
} 
else {
    console.log("es tut mir leid alle anderen Burger sind ausverkauft");
    hi = prompt("1 2 oder 3 was darf es denn sein ?")
}


let drink = prompt("Welches Getränk darf es sein Cola Fanta oder Bier ?");

if (drink == "Cola") {
    console.log("Ich nehme eine Cola ")
    
}
else if(drink == "Fanta") {
    console.log("Ich nehme die Fanta")
}
else if(drink == "Bier"){
    console.log("Ich bin ein Mann ich nehme das Bier")
}
else {
    console.log("Haben wir leider nicht mehr auf lager")
}
hi = prompt("Sie bekommen die Nr. "+ burger + " und ein(e) " + drink + " und ich bekomme von ihnen xxx Euros vielen dank für ihre Bestellung " )