---
title: "Kodstandard"
date: "2019-09-20"
---

# Variabler

- Alla variabler ni skapar ska vara **let**-variabler, inte var.
- Namn på variabler och funktioner ska vara beskrivande för vad de gör.
- Variabler och funktioner ni skapar ska följa camelCase-standard, alltså att de börjar på en liten bokstav, och varje nytt ord ska börja med en stor bokstav.

Exempel:

```js
// Bra
let fullName = "Felix Thålin";
function getLastName(name) {
    let lastName = name.split(" ")[1];
    return lastName;
}

// Dåligt
var x = "Felix Thålin";
function GETLASTNAME(y) {
    let z = y.split(" ")[1];
    return z;
}
```

# Block och brackets

Block ska vara indenterade korrekt, och blockens öppningsbracket ska vara på samma rad som blockets deklaration.

Exempel:

```js
// Bra
while (true) {
  // do stuff
}

// Dåligt
while (true)
{
// do stuff
}
```

# Kommentering
Koden ska kommenteras enligt följande standard:
- Single-line comment (//) används i ställen där det räcker med en rad för att kommentera, annars ska multi-line comment (/**/) användas.
- Det ska finnas ett mellanslag mellan kommenteringstecknena (// och /**/).
- Kommentering ska vara så kort som möjligt, men samtidigt vara så förklarande som möjligt.

Exempel:
```js
// Bra kommentering

/*
    Också bra kommentering
    - Ibland är det bra att skriva kommentering på flera rader.
*/

// Funktionen hämtar ut ett efternamn från ett fullständigt namn

/*Dålig kommentering*/
//Detta är ju aldrig
//bra kommentering generellt sätt, eller hur?
//Magi sker här
```
