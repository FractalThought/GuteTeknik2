---
title: "CSS Custom Properties"
date: "2017-08-10"
---

# Custom properties (css variables)

## Vad är det?

- Sätt att skapa en variabel i CSS
- Kan överskrivas
- Möjliggör skalbarhet
- Används för att skapa designsystem

## Syntax:

### Skapande:

```css
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

.important-container {
  --text-color: var(--secondary-color);
}
```

# Kan ändras live med JavaScript

```javascript
let root = document.documentElement

root.addEventListener("click", e => {
  root.style.setProperty("--background-color", "var(--dark)")
  root.style.setProperty("--text-color", "var(--light)")
})
```

## Källor:

- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Using CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Variable Secrets](https://www.youtube.com/watch?v=UQRSaG1hQ20)
