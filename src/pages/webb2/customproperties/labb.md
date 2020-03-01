---
title: "CSS Custom Properties Laborationer"
date: "2017-08-10"
---

<!--

Really want a semi-small project where they create a mini-site and uses the following techniques:

- CSS custom variables
- BEM
- Color system

Project: Create sales cards
Have that as a mini-project?

Lesson 1: Intro to CSS custom variables + some laborations
Lesson 2: Laborations
Lesson 3: Intro to BEM + custom variables



-->

## Skapa en grund

Skapa en grundläggande hemsida som har följande i body-taggen:

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
    <h1>CSS variabler</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <p>Fugiat nobis placeat perferendis cum perspiciatis blanditiis?</p>
    <p>Suscipit, deserunt. Sunt possimus quos nobis voluptatum.</p>

    <div class="card-wrapper">
      <div class="card">
        <h2 class="card__name"></h2>
        <h3 class="card__price"></h3>
        <p class="card__desc"></p>
      </div>
      <div class="card">
        <h2 class="card__name"></h2>
        <h3 class="card__price"></h3>
        <p class="card__desc"></p>
      </div>
      <div class="card">
        <h2 class="card__name"></h2>
        <h3 class="card__price"></h3>
        <p class="card__desc"></p>
      </div>
    </div>
  </main>
  <footer>Copyright 2020</footer>
</div>
```

```css
body {
  font-family: Verdana, sans-serif;
}

.wrapper {
  width: 75vw;
  margin: 0 auto;
}

.card-wrapper {
  display: flex;
  justify-content: center;
}

.card {
  border-top: 2px solid black;
  padding: 10px;
  margin: 10px;
}
```

## Lägg till färger

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

Använd sedan variablerna för att stila följande (ersätt -- i var med din valda variabel):

```css
body {
  color: var(--);
}

header,
footer {
  background: var(--);
}

.card {
  border-color: var(--);
}

.card--suggested {
  border-color: var(--);
}
```

## Stila button

1. Stila din knapp så att den minst får en liten border-radius (3-5px), en bakgrundsfärg, en textfärg, och lite padding och eventuellt marginal.
2. Skapa en variabel för border-radius och ge både din knapp och .card samma border-radius.

Tips: Lägg till `display: inline-block` för att få a-taggen att se mer ut som en knapp (block).

### Bonus:

- Lägg till ett hover-state (`.button:hover`) till din knapp som ändras dess bakgrundsfärg till en annan färg.

## Variabel som refererar till en annan variabel

1. Skapa två nya varibler, `text-color` och `bg-color`. Sätt dem till `var(--dark-color)`, och `var(--light-color)`.
2. Ändra om på de ställen där du använder dark-color och light-color som textfärg eller bakgrundsfärg till dina nya variabler.
3. Testa att byta text-color till något annat, till exempel --primary-color, eller varför inte byta din text-color till din bg-color, och vice versa.

## Dark-mode button

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

# Tailwind defaults

- [color palette](https://tailwindcss.com/docs/customizing-colors/#default-color-palette)
- [Spacing](https://tailwindcss.com/docs/customizing-spacing/#default-spacing-scale)
- [Font size](https://tailwindcss.com/docs/font-size/)
- [Border radius](https://tailwindcss.com/docs/border-radius/)
- [Box shadow](https://tailwindcss.com/docs/box-shadow/)

# [Codepen](https://codepen.io/GuteFelix/pen/xxGrqgB)

Skapa CSS variabler för följande, och sätt deras värden:

- Primär färg
- Accentfärg
- Textfärg
- Mörk färg (tex svart)
- Ljus färg (tex vit)
- Margin
- Padding
- Box-shadow
- Border-radius
