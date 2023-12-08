
let myArray =[
"Du wanderst durch den verschneiten Schwazwald, du kommst zu einer Weggabelung, wo gehst du lang?",
"Du gehst nach links, die Sonne geht unter. In der Dunkelheit erblickst du das weihnachtliche Furtwangen. Du kommst zu einem Weihnachtsmarkt. Gehst du zu einem Glühweinstand oder zu einem Waffelstand?",
"Du lässt dir den Glühwein schmecken und lässt den Tag gemütlich ausklingen!", 
"Du lässt dir eine Waffel schmecken und lässt den Tag gemütlich ausklingen!",
"Du gehst nach rechts, die Sonne geht unter, in der Dunkelheit kommst du vom Weg ab und stürtzt einen Abhang hinunter. Gehst du weiter oder zurück?",
"Du kämpfst dich weiter durch das Tal, du kommst nach Furtwangen und bist verloren!",
"Du kletterst zurück nach oben, verläufst dich und erfrierst. Du bist ein weiteres Opfer des gefählichen Schwarzwaldes geworden!"
];


let myPrompt0 = prompt("Wie alt bist du?")

function alterAbfrage(alter) {
    if (alter >= 18) {
        return "Du bist volljährig. Willkommen!";
    } else if (alter >= 18) {
        return "Du bist leider noch nicht volljährig.";
    } else {
        return "Ungültiges Alter. Bitte gebe ein gültiges Alter ein.";
    }
}


let myPrompt = prompt(myArray[0])

if (myPrompt == "links") {
     let links = prompt (myArray[1])
    

    if (links == "Glühweinstand") {
     let Glühweinstand = alert (myArray[2])
    }

    else if (links == "Waffelstand") {
     let Waffelstand = alert (myArray[3])
    }

}


else if (myPrompt == "rechts") {
    let rechts = prompt (myArray[4])

    if (rechts == "weiter") {
        let weiter = alert (myArray[5])
    }

    else if (rechts =="zurück") {
        let zurück = alert (myArray[6])
    }

}