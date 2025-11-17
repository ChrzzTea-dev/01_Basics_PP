/***** Erinnerung: Arrays *******/

//let arr;
//arr = ["Ich","bin","Max"];
//output(arr);
//output(arr[0]);
//output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
          //   ["Ich","bin","Max"],
          //   ["Ich","bin","Moritz"]
     //    ];
      
 //output(arr);
 //output(arr[0]);
 //output(arr[0][0]+ " " + arr[1][2]);
 //output(arr[1][0]);
 //output("------------");

 // nested loop
 //for (let i = 0; i < arr.length; i++) {
 //    for (let j = 0; j < arr[i].length; j++) {
 //        output("Index i: " + i + " Index j: " + j);
 //        output(arr[i][j]);       
 //    }
 //}


/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName:"Felix",
                familyName:"Wolf",
                salary: [120000,160000],
                Permissions: true,
                sayHello: function(){
                    return "Hallo"; 
                },
                sayHello2: function(){
                    return "Hallo, ich bin" + this.firstName
                    }
              
                




             };
output(person); 
output("--------------------")
output(person.firstName); // Um direkt eine bestimmte Sache suchen zu können
output(person.familyName);
output("--------------------")
output(person.salary.length);// um zu sehen wie viele werte dort angegeben sind 
output(person.salary[1]);
output(person.Permissions);




const txt = person.sayHello() + ", ich bin " + person.firstName +
            " und verdiene " + person.salary[1] + " p.a."
output(txt);

const txt2 = person.sayHello2() + "und verdiene" + person.salary[1] + " p.a.";
output(txt);






// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}


