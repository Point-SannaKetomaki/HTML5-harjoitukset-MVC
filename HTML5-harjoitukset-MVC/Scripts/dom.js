// kommentoi alert kun alat töihin
//alert('hei');




function addhtml() {

//kohta 2:rakenna funktio, jolla teet H2 –elementin jossa tekstinä HyperText Markup Language
var header = document.createElement("h2");
var text = document.createTextNode("HyperText Markup Language");
    header.appendChild(text);


//kohta 8.Rakenna hypertekstilinkki, joka johtaa HTML: n kotisivulle.

    var link = document.createElement("a");
    var site = 'http://www.w3.org/html/';
    link.setAttribute("href", site);
    var linktext = document.createTextNode(site);
    link.appendChild(linktext);


//kohta 3: Tee viittaus paikkaan jonne sijoitat uuden sisällön
var paikka = document.getElementById("info");

//kohta 4: Tyhjennetään divin sisältö.
while (paikka.hasChildNodes()) {
    paikka.removeChild(paikka.lastChild);
}

//kohta 5 ja 8: Lisätään sisältö skriptillä dokumenttiin divin sisään.
    paikka.appendChild(header);
    paikka.appendChild(link);

    
}



