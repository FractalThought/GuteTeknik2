---
title: "Begrepp"
date: "2017-08-10"
heading: "Om kursen"
---

## Primitivt värde (primitive)

Med primitivt värde (oftast förkortat till _värde_) menas en typ av information, till exempel ett nummer (integer), en mening (sträng, string på engelska), eller sant/falskt (boolean).

### Integer

### String

En sträng

### Boolean

En boolean, ofta förkortat bool, är ett primitivt värde som antingen är true (sant) eller false (falskt).

## Variabel (variable)

En variabel lagrar ett primitivt värde.

## Array

En array är en lista med värden. Arrayer kan itereras (loopas) över, och varje värde i listan går att komma åt genom att ange den plats (index) som värdet ligger i listan. Detta kallas indexering, och indexeringen av arrayer börjar alltid på 0, så första värdet i en array går att kommas åt genom `arrayensNamn[0]`.

### Syntax:

```javascript
const wizards = ["Harry Potter", "Ron Weasley", "Hermione Granger"]
console.log(myArray) // Output: ["Harry Potter", "Ron Weasley", "Hermione Granger"]
console.log(myArray[0]) // Output: "Harry Potter"
```

## Condition (Villkor)

## Loop (iteratering, iterationssats)

En loop är en bit kod som körs flera gånger. Oftast används

### Användning

```js
/*
    Skapar en array med karaktärer från Harry Potter
    Loopar igenom dem för att skriva ut varje karaktär
*/

const wizards = ["Harry Potter", "Ron Weasley", "Hermione Granger"]
for (let i = 0; i < wizards.length; i++) {
  console.log(wizards[i])
}
```
