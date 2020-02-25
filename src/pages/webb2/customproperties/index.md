---
title: "CSS Custom Properties"
date: "2017-08-10"
---

## Vad är det?

- Sätt att skapa en variabel i CSS
- Kan överskrivas
- Möjliggör skalbarhet
- Används för att skapa designsystem

## Syntax:

### Skapande:

```css
/* Root gör att alla element kommer åt variabeln */
:root {
  --primary-color: #af0e12;
}
```

### Användning

```css
p {
  color: var(--primary-color);
}
```

## Exempel

```css
:root {
  --primary-color: #af0e12;
  --secondary-color: #0eafab;
  --text-color: var(--primary-color);
  --accent-color: var(--secondary-color);
}

p {
  color: var(--text-color);
}

.info-card {
  --primary-weight: 400;
  --bold-weight: 600;
}

.info-card__heading {
  font-weight: var(--primary-weight);
}

```

# Kan ändras live med JavaScript

```javascript
// Hämta root-elementet
let root = document.documentElement;

let isDark = false;

// Registera ett klick-event till root
root.addEventListener("click", e => {

  // Ifall temat är mörkt, sätt till ljust, annars sätt till mörkt.
  isDark ? root.style.setProperty("--text-color", "var(--light)") : root.style.setProperty("--background-color", "var(--dark)");

  // Ställ om isDark-variabeln
  isDark = !isDark;
  
})
```

## Kan överskrivas precis som andra properties

```css
:root {
  --primary-color: #af0e12;
  --secondary-color: #0eafab;
  --text-color: var(--primary-color);
  --accent-color: var(--secondary-color);
}

.important-container {
  --text-color: var(--secondary-color);
}

.warning {
  --primary-color: #af0e12;
}
```


## Källor:

- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Using CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Variables explained with 5 examples](https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd)
- [CSS Variables Tutorial (video)](https://www.youtube.com/watch?v=sQUB039MG0I)
- [CSS Variable Secrets (video)](https://www.youtube.com/watch?v=UQRSaG1hQ20)
