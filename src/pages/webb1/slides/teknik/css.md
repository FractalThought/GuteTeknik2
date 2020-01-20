# Introduktion till CSS

---


## Anatomin för en webbsida
- Ditt innehåll
- + HTML: Strukturen
- + CSS: Presentationen (utseendet)

En hemsida är ett sätt att presentera ditt innehåll till världen, genom att använda HTML och CSS för att presentera innehållet och få det att se bra ut.

---

## Vad är CSS?

- Står för Cascading Style Sheet
- Stylesheet "language"/Stilmallsspråk
- Används tillsammans med HTML, men är inte HTML

---

## Vad kan CSS göra?
- Färga text/element
- Ändra storlek och position
- 

---

## Syntax (hur det ser ut)

```css

p {
  color: #AF0E12;
  font-size: 16px;
}

p.intro {
  font-weight: bold;
}

div#container {
  background: #000;
}

```

---

## CSS regel

<img src="cssrule.png" alt="CSS regel">

---

```css
selector {
  property: value;
}
```

- Ett block med CSS kallas regel
- En regel börjar med en Selector
- En regel har uppsättning egenskaper (properties) och dess värden (values)
- Egenskap och dess värde kallas Deklaration

---

## 3 sätt att länka CSS med HTML
- Inline
- Embedded
- External

---
### Inline

```html
<p style="color:red">Lite röd text.</p>
```
- Använder HTML-attributet `style`
- Appliceras endast på den specifika taggen
- Bör inte användas (svår använda klokt)

---

### Embedded

```html
<head>
<style type="text/css">
  p {
    color: #AF0E12;
    font-size: 16px;
  }
</style>
</head>
```

- Läggs direkt i head-taggen, och använder en style-tagg.
- Används endast i den specifika HTML-filen

---

### External (linked)

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

- Flera sidor kan använda samma stilmall
- Lättare att underhålla och utveckla
- Kan cachas (sparas) av webbläsaren = snabbare hemsida

---
### Element selector

Regel för att stila alla element av en viss typ

```css
p {
}
```

---

### Element selector

```css

h1 {
}

li {
}

td {
}
```

---

### Deklaration

```css
color: red;
background: blue;
font-weight: bold;
font-size: 16px;
```

---


### Färgvärden

---