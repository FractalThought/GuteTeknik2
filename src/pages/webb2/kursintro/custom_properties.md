# Custom properties

(css variables)

---

## Vad är det?

- Sätt att skapa en variabel i CSS
- Kan överskrivas
- Möjliggör skalbarhet
- Används för att skapa designsystem

---

# Syntaxen är lite konstig

---

## Skapande

```css
:root {
  --primary-color: #af0e12;
}
```

## Användning

```css
p {
  color: var(--primary-color);
}
```

---

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

---

# Kan ändras live med JavaScript

---

```javascript
let root = document.documentElement

root.addEventListener("click", e => {
  root.style.setProperty("--background-color", "var(--dark)")
  root.style.setProperty("--text-color", "var(--light)")
})
```

---

### Introduktion

<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PHO6TBq_auI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

### Användningsexempel

<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/V9yP0QG0NWI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
