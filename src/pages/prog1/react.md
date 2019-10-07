# React Hooks

Läs mer om Hooks på [reactjs.org](https://reactjs.org/docs/hooks-intro.html).

Hooks är en annan term för funktion som utför något som inte direkt har med UI't att göra, utan är mer som en "hjälpfunktion".

Dessa ligger utanför våra individuella komponenter, så vi kan använda dem i flera komponenter om vi skulle vilja.

## useState

Läs mer om useState på [reactjs.org](https://reactjs.org/docs/hooks-state.html).

useState gör att vi kan lägga till states till våra funktionella komponenter.

State (eller tillstånd på svenska) är ett tillstånd som en komponent befinner sig i. Vi använder det vanligtvis när vi har någon variabel som ska kunna förändras, och detta påverkar då

För att använda useState så behöver vi importera den längst upp i filen där vi ska använda den. Ersätta den vanliga importeringen av react ("**import react from 'react';**") med följande;

```js
import react, { useState } from "react";
```

Nu kan vi använda useState, till exempel så här:

```jsx
function Example() {
  // Deklarerar en ny state-variabel kallad count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

count blir då variabeln som håller i vårt state, och setCount är hur vi förändrar (sätter) vår state. I det här fallet använder vi en knapp som sätter count till count + 1, alltså ökar count med 1.

Fler exempel hittar du på [reactjs.org's introduktion till Hooks](https://reactjs.org/docs/hooks-state.html).
