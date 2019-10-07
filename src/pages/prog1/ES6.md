# ECMAScript 6

I ECMAScript 6 (kallas även ES6, JS6, ECMA 2015, eller modern javaScript), en stor uppdatering till javaScript som kom 17 juni 2015, så lades flera nya features till i språket som förenklade utvecklingen.

Du kan läsa mer om ES6 på http://es6-features.org/ och https://es6.io/. Från ES6 kom bland annat de nya variabeldeklarationerna _**let**_ och _**const**_.

## Arrow function

[Läs mer om Arrow function på MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Mycket av ES6 handlar om att förenkla och snabba på utvecklingen. En av dessa är Arrow function, som är ett mer kompakt sätt att skriva en anonym funktion.

Likt en funktion så kan vi spara funktionen i en variabel, så vi kan skicka med den och referera till den, även fast funktionen i sig är anonym.

Syntaxen för en arrow funktion är följande:

```js
// Enkel funktion
() => {
  /* Kod som körs när funktionen kallas */
};

// Skapar en variabel vi kan använda i vår funktion
let name = "Felix";
// Arrow funktion med bara ett argument, då måste vi inte använda paranteser
name => {
  console.log(name);
};

/*
    Skickar in två argument til funktionen
    Sparar funktionen i en const-variabel
*/
const printDetails = (personName, personAge) => {
  console.log(personName + " är " + personAge + " år.");
};

// Kallar på funktionen
printDetails("Felix", 29);
```

<h3 style="page-break-before: always;">Callbacks</h3>

Vi använder arrow funktioner framförallt för att skapa callbacks, alltså en funktion som ska köras när något annat har hänt, till exempel så här:

```js
// Skapar vår funktion
const myCallback = event => {
  event.target.style = "background-color: red;";
};

// Ifall vi skulle använda function istället:
function myCallback(event) {
  event.target.style = "background-color: red";
}

// Lägger in funktionen som ett callback
myDiv.addEventListener("click", myCallback);
```

Istället för att lagra funktionen, bra om vi inte behöver använda callbacken mer än en gång:

```js
// function:
myButton.addEventListener("click", function(event) {
  console.log("Clicked myButton");
});

// arrow funktion:
myButton.addEventListener("click", event => {
  console.log("Clicked myButton");
});
```

I en vanlig funktion så behöver vi skriva ut ett return-statement för att returnera något. I en arrow funktion är detta implicit, vilket innebär att om vi bara har ett statement i funktionen som är ett return statement, så behöver vi inte använda nyckelordet return.

<h2 style="page-break-before: always;">Arraymetoden Map</h2>

Läs mer om arraymetoderna och hur de kan användas för att föränkla din kod på [denna Medium blog-posten](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) och [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

En annan viktig del som lades till i ES6 är arraymetoderna Map, Filter, och Reduce. De har alla olika användningsområde, och Map är det vanligaste.

En arraymetod är en metod som är en del av array-prototypen, alltså kan vi kalla på den direkt från arrayen själv. I fallet med Map, Filter, och Reduce så returnerar dem en ny array, men förändrar inte ursprungsarrayen.

Map används för att förändra data i en array (kallat data massage), eller för att skriva ut varje element i en array. Observera dock att ursprungliga arrayen inte blir förändrad.

Den gör detta genom att loopa igenom arrayen, och kör en callback-funktion för varje värde i arrayen. Resultatet av callback-funktionen (det som returneras) blir satt som det nya värdet i den arrayen som blir resultatet av metoden.

```js
array.map(function(item) {
  /* Gör något med item, sen returnera det för att modifiera */
  return item;
});
```

Exempel:

```js
let stats: [
  { statsName: "Strength", statsValue: 5 },
  { statsName: "Agility", statsValue: 5 },
  { statsName: "Stamina", statsValue: 10 }
];

// Uppdaterar stats
stats = stats.map(function(stat) {
  stat.statsValue += 5; // Öka alla stats med 5
  return stat; // returnerar det ändrade objektet
});

/*
    Använd för att hämta ut alla stats som finns
    Använder en arrow funktion som returnerar stat.statsName.
*/
let statsNames = stats.map(stat => stat.statsName);
```

<h3 style="page-break-before: always;">Argument till callback-funktionen:</h3>

Map-metoden skickar med currentValue som argument till callback-funktionen, så vi kan få ut alla värden i arrayen. Den kan också skicka med index (börjar på 0), och den ursprungliga arrayen;

```js
let new_array = arr.map(function callback(currentValue, index, array) {
  // Return element for new_array
});
```

Detta gör att vi kan komma åt index, och den ursprungliga arrayen, för att till exempel göra jämförelser, eller för att lagra en nyckel så vi enkelt kan komma tillbaka till ett specifikt värde.

<h2 style="page-break-before: always;">Object destructuring</h2>

Läs mer om [object destructuring på MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring).

Objekt har ju egenskaper i sig, till exempel en person kan ha _name_, _age_, och _profession_ som egenskaper.

Med object destructuring så kan vi hämta ut dessa egenskaper och spara dem i variabler, så här:

```js
const person = {
  name: "Felix",
  age: 29,
  profession: "teacher"
};

// Hämtar ut personens ålder (age) och lagrar den i en let-variabel
let { age } = person;
console.log(age);

// Vi kan också göra detta direkt i en funktions parametrar
function printName({ name }) {
  console.log(name);
}

// Skickar med hela objektet
printName(person);
```
