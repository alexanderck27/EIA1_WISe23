let myPrompt = prompt("Du wanderst durch den verschneiten Schwazwald, du kommst zu einer Weggabelung, wo gehst du lang?")

if (myPrompt == "links") {
    let links = prompt ("Du gehst nach links, die Sonne geht unter. In der Dunkelheit erblickst du das weihnachtliche Furtwangen. Du kommst zu einem Weihnachtsmarkt. Gehst du zu einem Glühweinstand oder zu einem Waffelstand?")


    if (links == "Glühweinstand") {
     let Glühweinstand = alert ("Du lässt dir den Glühwein schmecken und lässt den Tag gemütlich ausklingen!")
    }

    else if (links == "Waffelstand") {
     let Waffelstand = alert ("Du lässt dir eine Waffel schmecken und lässt den Tag gemütlich ausklingen!")
    }

}


else if (myPrompt == "rechts") {
    let rechts = prompt ("Du gehst nach rechts, die Sonne geht unter, in der Dunkelheit kommst du vom Weg ab und stürtzt einen Abhang hinunter. Gehst du weiter oder zurück?")

    if (rechts == "weiter") {
        let weiter = alert ("Du kämpfst dich weiter durch das Tal, du kommst nach Furtwangen und bist verloren!")
    }

    else if (rechts =="zurück") {
        let zurück = alert ("Du kletterst zurück nach oben, verläufst dich und erfrierst. Du bist ein weiteres Opfer des gefählichen Schwarzwaldes geworden!")
    }

}
