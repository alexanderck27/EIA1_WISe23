stories = [
    "Du wanderst durch den verschneiten Schwazwald, du kommst zu einer Weggabelung, wo gehst du lang?",
    "Du gehst nach links, die Sonne geht unter. In der Dunkelheit erblickst du das weihnachtliche Furtwangen. Du kommst zu einem Weihnachtsmarkt. Gehst du zu einem Glühweinstand oder zu einem Waffelstand?",
    "Du lässt dir den Glühwein schmecken und lässt den Tag gemütlich ausklingen!", 
    "Du lässt dir eine Waffel schmecken und lässt den Tag gemütlich ausklingen!",
    "Du gehst nach rechts, die Sonne geht unter, in der Dunkelheit kommst du vom Weg ab und stürtzt einen Abhang hinunter. Gehst du weiter oder zurück?",
    "Du kämpfst dich weiter durch das Tal, du kommst nach Furtwangen und bist verloren!",
    "Du kletterst zurück nach oben, verläufst dich und erfrierst. Du bist ein weiteres Opfer des gefählichen Schwarzwaldes geworden!"
];

let state = 0                                               //Definierung von state

const input = document.querySelector(".input")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (state == 0) {                                  //Benennung von state 0
            Auswahl1();                                    // Verbindung zur Funktion 1
            event.currentTarget.value = "";                // Überschreibt die Eingabe
        }


        if (state == 1) {                                  //Benennung von state 1
            Auswahl2();                                    // Verbindung zur Funktion 2
            event.currentTarget.value = "";                // Überschreibt die Eingabe
        }    


        if (state == 2) {                                  //Benennung von state 2
            Auswahl3();                                    // Verbindung zur Funktion 3
            event.currentTarget.value = "";                // Überschreibt die Eingabe
        }    
    }
})

function Auswahl1() {                              //1.Funktion

        if (input.value == "rechts") {            //Definition Eingabe
                output.innerHTML = stories [4]    //angezeigte Lösung
                state =1;                         //Verbidung zu state 1
                console.log(state)                //Anzeige von state
              
        } else if (input.value == "links") {      //Definition Eingabe
             output.innerHTML = stories [1]       //angezeigte Lösung
             state =2;                            //Verbidung zu state 2
             console.log(state)                   //Anzeige von state
        
        }
    }

function Auswahl2() {                            //2.Funktion

        if (input.value == "Glühweinstand") {     //Definition Eingabe
                output.innerHTML = stories [2]     //angezeigte Lösung
              
              
        } else if (input.value == "Waffelstand") {  //Definition Eingabe
             output.innerHTML = stories [3]          //angezeigte Lösung
            
        }
    }


function Auswahl3() {                             //3.Funktion

        if (input.value == "weiter") {            //Definition Eingabe
                output.innerHTML = stories [5]     //angezeigte Lösung
              
              
        } else if (input.value == "zurück") {     //Definition Eingabe
             output.innerHTML = stories [6]        //angezeigte Lösung
            
        }
    }




    
  