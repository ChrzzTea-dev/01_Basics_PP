/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});// für die eingabe für Prompts

let kname = prompt("Name: ? ");
let kalter = prompt("Alter: ? ");


//if(kalter >0, kalter<6)
{
//console.log("bekommt Milch")
}
//else if (kalter>=6, kalter<12)
{
//console.log("bekommt Saft")
}
//else if (kalter >=13, kalter<17)
{
//console.log("bekommt Cola")
}
//else
{
//console.log("bekommt Wein")
}



switch (true)
{
    case kalter >0&& kalter<6:
            console.log("bekommt Milch")
            break;
    case kalter>=6&& kalter<12:
            console.log("bekommt Saft");
            break;
    case kalter>=13&& kalter<17: 
            console.log("bekommt Cola");
            break;
    case kalter>=18:
            console.log("bekommt Wein");
            break;

        default: // Wichtig !!!
            console.log("wer nix bestellt bekommt nix");
            
}
    

    



