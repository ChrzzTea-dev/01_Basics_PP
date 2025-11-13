
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

    let arr;
    arr = new Array();  // Konstruktor| arrays sind so zusagen container
    arr = [];
    arr = [2,11,7,8,10,20];  // Literale schreibweise

   // output(arr);  
   // output(arr.length);  // anzahl der elemente im array
   // output(arr[0]);     // zugriff auf einzelnes element (index beginnt bei 0)     
  // output(arr[arr.length - 1]);  // zugriff auf letztes element (index = länge -1)
    


// Inkrement (untere Grenze --> obere Grenze)
//for (let i = 0; i < 100; i++) {// i zählt von 0 bis 99{
    //output("index:" + i); // i --> schfleifen-index
//}

//Dekrement (obere Grenze --> untere Grenze)// 
 //for (let i = 10; i > 0; i--) {  // i --> Schleifen-Index
     //output("index :" + i); 
     //}


// Inkrement (var. Schrittweite)
//for (let i = 10; i <= 100; i += 5) 
 {
  // output(i);   
}

/* 02b. For-Schleife für Array-Index (Iteration)*/
 /*arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
 for (let i = 0; i < arr.length; i++) 
 {
   output(i); // interner Index 
   output(arr[i]);  // Mapping  intern --> extern
 }

/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

// Zu "Fuß" - DRY !!! */
/*let a = 0; // Anfangswert
 output("inhalt von a: " + a);
 a = a + 1; // a = 0 + 1
 output("inhalt von a: " + a);
 a = a + 1; // a = 1 + 1
 output("inhalt von a: " + a);
 a = a + 1; // a = 2 + 1
 output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */

 /*let a = 0; // Anfangswert
for (let i = 0; i < 10; i++) {
    //a = a + 1
    a += 1;  
     output("inhalt von a: " + a);
 }

/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = ""; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    str += "Test" + " "; // a = a + 1
//    output(str);
// }



/*** 01b. Funktionalität mit Array 2  */

// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananananderdereihung ...
    const GAP = " ";
    const PUNCT = ".";
    let str = "";
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {

   
    // 1 Iteration : Struktur Genau erzeugen !!!
        for (let i = 0; i < arr.length; i++) {
            //output(arr[i]);
            str += arr[i] + GAP; 
            if (i!=arr.length -1) {
            }
            else {
                    str += arr[i] + PUNCT;
                }
            
        }
        return str;


}
 str =""
// 2 Iteration : Struktur erzeugen + trimmen()
for (let i = 0; i <arr.length; i++){
    str +=arr[i] + GAP; 

return str.trim()+ PUNCT;

}


// 3. Variante: Ausnutzen von generischen Fuktionen ...
    return arr.join(GAP) + PUNCT;


/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}





 //Modul: Ausgabe in Konsole : Test
    //output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
/*output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] +
                PUNCT;

    return str;
}
*/

