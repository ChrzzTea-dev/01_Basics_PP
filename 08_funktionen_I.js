
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
//test();

// Funktionsrumpf | (callee)
// Funktionsdeklaration 
function test()
{
console.log("Hallo Kevin!");
}



// Funktionsrumpf | callee
// Fnunktionsdeklaration

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//call
//ausgabeNamen();


//Funktion
function ausgabeNamen()
{
    //interne Variable | What happens in Vegas ... 
    let firstName = "Chris";
    console.log("Hallo " + firstName + "!");
}

//console.log(firstName); //  Fehler : SCOPE !! 



/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


//ausgabeNamen2("Kevin"); // Argument --> Daten für Parameter
//ausgabeNamen2("Chris");
//ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName) { // Parameter
    //console.log("Hallo " + firstName + "!");
}





/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
ausgabeNamen3("Max", "Mütze");
ausgabeNamen3("Tony", "Hawk");
ausgabeNamen3("Chris", "Gee");

// Argumente werden von prompt() geliefert
//const prompt = require('prompt-sync')({sigint: true});
//ausgabeNamen3(prompt("Vorname: "),prompt("Name: "))

function ausgabeNamen3(firstName, familyName) { // Parameter
    //console.log("Hallo " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max", "Mütze");

function ausgabeNamenSRP(firstName, familyName) { 

    // 1st responsibility: string composing 
    const GAP = " ";
    let outputStr = "Hallo " + firstName + " " + familyName + "!"

    // 2nd responsibility : string output
    console.log(outputStr);
}
