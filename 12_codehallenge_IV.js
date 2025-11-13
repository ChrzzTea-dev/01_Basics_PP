

    /*** Mini-Challenge  */
    // Satzbau + variable Punktuation

    // Vereinbarung:
    // "S" (sentence) --> "."  Ich bin Max.
    // "Q" (question) --> "?"  Bist du Max?
    // "E" (exclamation) --> "!"  Ich bin!

    // Parameter --> funktion getSentence([ ...], "Q"){ ...}


    /*** Funktion mit Array als Parameter */
    // mögliche Tests:


        const GAP = " ";        // Globale Konstanten
        const PUNCT = ".";      // Globale Konstanten
        const Q_MARK = "?";     // Globale Konstanten
        const EX_MARK = "!";    // Globale Konstanten

        // Was wird ausgegeben möchten 
    output(getSentence(["Ich","bin","Max"],"S"));
    output(getSentence(["Bist","du","Max"],"Q"));
    output(getSentence(["Ich","bin"],"E"));
    output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

    function getSentence(arr,op){
    let sentence = arr.join(GAP); { // join fügt die Elemente des Arrays mit dem Trennzeichen zusammen
    if(op === "Q"){
    return sentence + Q_MARK; // hängt Fragezeichen an
    }else if(op === "E"){
    return sentence + EX_MARK; // hängt Ausrufezeichen an
    }else{
    return sentence + PUNCT; // hängt Punkt an
    }
    }
    }
    function output(outputData) { // Ausgabe in Konsole
    console.log(outputData);  // Ausgabe in Konsole
    }