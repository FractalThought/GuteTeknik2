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
  <header>
  <h1>Custom properties</h1>
    <nav>
      <a href="#">Hem</a>
      <a href="#">Varför varabel?</a>
      <a href="#">Kontakt</a>
    </nav>
  </header>
  <div class="main-wrapper">
    <main>
      <h1>CSS variabler</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <p>Fugiat nobis placeat perferendis cum perspiciatis blanditiis?</p>
      <p>Suscipit, deserunt. Sunt possimus quos nobis voluptatum.</p>
    </main>
    <aside>
      <h2></h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
  </div>
  <footer>Copyright 2020</footer>
```

Stila den på följande sätt:
- main och aside ska vara bredvid varandra
- h1 och nav ska vara i vardera ände av headern, och länkarna i nav ska 

## Använd CSS custom properties
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

Använd variablerna för att sätta diverse properties på elementen på din sida, till exempel color till variabeln för din textfärg, bakgrundfärgen på headern och footern till din primära färg, osv. Sätt din mains bakgrundsfärg till din ljusa färgvariabel och din text till din textfärgsvariabel.

## Dark-mode button
Skapa en knapp (`<button>`) i headern och bind den till ett javascript event med följande:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", SwitchDarkMode)

function SwitchDarkMode() {

}
```

Inuti funktionen SwitchDarkMode lägger du till kod som ändrar din mains bakgrundsfärg till din mörka färg, och din textfärg till din ljus färg.

### Bonusgrejer
- Gör att när du trycker på Dark Mode knappen igen så ändras det tillbaka till ljus.
- Gör så att texten på knappen ändras till Light Mode när Dark mode är aktiverad.
