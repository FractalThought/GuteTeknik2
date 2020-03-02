---
title: "CSS Koncept Laborationer"
date: "2017-08-10"
---

Ni ska arbeta med dessa laborationer under lektionstid, eller under egen tid.
Det är ingen inlämning, men att ni har gjort laborationerna kommer hjälpa er när ni gör projekten.

## 1. Skapa en grund

Skapa en grundläggande hemsida som har följande i body-taggen:

### HTML

```html
<div class="wrapper">
  <header>
    <h1>Custom properties</h1>
    <nav>
      <a href="#">Hem</a>
      <a href="#">Varför varabel?</a>
      <a href="#">Kontakt</a>
    </nav>
  </header>
  <main>
    <div class="card-wrapper">
      <div class="card">
        <h2 class="card__name">Starter</h2>
        <h3 class="card__price">$0</h3>
        <p class="card__desc">Custom properties är ett sätt att skapa variabler i CSS som kan återanvändas.</p>
        <a class="button button--secondary">Select</a>
      </div>
      <div class="card card--suggested">
        <h2 class="card__name">Business</h2>
        <h3 class="card__price">$20 / Month</h3>
        <p class="card__desc">Custom properties kan överskrivas precis som vanliga properties.</p>
        <a class="button">Select</a>
      </div>
      <div class="card">
        <h2 class="card__name">Enterprise</h2>
        <h3 class="card__price">$100 / Month</h3>
        <p class="card__desc">Custom properties används för att skapa designsystem.</p>
        <a class="button button--secondary" href="#">Select</a>
      </div>
  </main>
    <footer><p>Copyright 2020</p></footer>
</div>
```

### CSS

```css
body {
  font-family: Verdana, sans-serif;
  padding: 0;
  margin: 0;
}

.wrapper {
  width: 75vw;
  margin: 0 auto;
}

header > h1 {
  margin: 0 0 20px 0;
}

main {
  min-height: 75vh;
}

.card-wrapper {
  display: flex;
  margin: 20px 0px;
  padding: 0;
  justify-content: center;
}

.card {
  width: 20vw;
  border-top: 20px solid black;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06);
}

footer {
  display: flex;
  justify-content: center;
}

.card > * {
  margin: 0;
}
```

## 2. Lägg till färger

Lägg till följande CSS variabler:

```css
:root {
  --primary-color: hsl(258, 50%, 52%);
  --primary-color-light: hsl(262, 81%, 77%);
  --primary-color-dark: hsl(254, 41%, 34%);
  --secondary-color: hsl(78, 50%, 52%);
  --secondary-color-light: hsl(78, 50%, 68%);
  --secondary-color-dark: hsl(78, 50%, 34%);
  --dark-color: hsl(220, 26%, 14%);
  --light-color: hsl(204, 45%, 98%);
}
```

### Använd färgerna

Använd sedan variablerna för att stila följande (ersätt -- i var med din valda variabel):

```css
body {
  color: var(--);
}

header,
footer {
  /* Sätt ut 3 olika färger för att skapa en linear-gradient */
  background: linear-gradient(45deg, var(--), var(--), var(--));
}

.card {
  border-color: var(--);
}

.card--suggested {
  border-color: var(--);
}
```

## 3. Stila button

1. Stila din knapp så att den minst får en liten border-radius (3-5px), en bakgrundsfärg, en textfärg, och lite padding och eventuellt marginal.
2. Skapa en variabel för border-radius och ge både din knapp och .card samma border-radius.
3. Lägg till ett hover-state (`.button:hover`) till din knapp som ändras dess bakgrundsfärg till en annan färg, men du får inte ändra propertyn för bakgrunden på elementet.

Tips: Lägg till `display: inline-block` för att få a-taggen att se mer ut som en knapp (block).

## 4. Variabel som refererar till en annan variabel

1. Skapa två nya varibler, `text-color` och `bg-color`. Sätt dem till `var(--dark-color)`, och `var(--light-color)`.
2. Ändra om på de ställen där du använder dark-color och light-color som textfärg eller bakgrundsfärg till dina nya variabler.
3. Testa att byta text-color till något annat, till exempel --primary-color, eller varför inte byta din text-color till din bg-color, och vice versa.u

## 5. Kontrollera marginal och padding med CSS variabler

Korten behöver stilas, det behövs mer utrymme. Skapa en variabel för utrymme och använd det för att skapa ett utrymme mellan elementen i kortet.

## 6. Dark-mode button (JS)

Skapa en knapp (`<button>`) i headern och bind den till ett javascript event med följande:

```javascript
const button = document.querySelector("button")
button.addEventListener("click", SwitchDarkMode)

function SwitchDarkMode() {}
```

Inuti funktionen SwitchDarkMode lägger du till kod som ändrar din mains bakgrundsfärg till din mörka färg, och din textfärg till din ljus färg.

### Bonusgrejer

- Gör att när du trycker på Dark Mode knappen igen så ändras det tillbaka till ljus.
- Gör så att texten på knappen ändras till Light Mode när Dark mode är aktiverad.

## 7. Avslutande rensning

Skapa stilar för de andra elementen på hemsidan. Försök identifiera ställen där du kan återanvända variabler.

Vill du så kan du testa på att använda till exempel [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) för att göra övergången till dark mode snyggare.

Avsluta med att försöka ta bort så mycket CSS du kan, utan att en slutliga stilen ändras.
