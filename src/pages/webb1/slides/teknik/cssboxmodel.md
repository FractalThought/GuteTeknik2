# CSS Box model

Hur man använder CSS för att hantera marginal, border, och vaddering

---

<p style="background-color: #af0e12; border: 0.3em solid #fff; padding: 1em">Allt är en box</p>

---

<div style="background: hsl(0, 100%, 25%); padding: 25px; text-align: left;">
    <p style="margin: 0;">Margin</p>
    <div style="background: hsl(60, 100%, 25%); padding: 0 16px 16px 16px; font-size: 16px;">
        <p style="margin: 0;">Border</p>
        <div style="background: hsl(140, 100%, 25%); padding: 25px; font-size: 2em;">
            <p style="margin: 0;">Padding</p>
            <div style="background: hsl(220, 100%, 25%)">
                <p style="margin: 0;">Content</p>
            </div>
        </div>
    </div>
</div>

---

<div style="background: hsl(0, 100%, 25%); padding: 25px; text-align: left;">

### Margin

Vaddering på svenska, den distans ett element har från andra element.

```css
ul {
  margin: 10px;
}
```

</div>

---

<div style="background: hsl(60, 100%, 25%); padding: 25px; text-align: left;">

### Border

Kant på svenska, en vanligtvis osynlig del av ett element, men när stilad blir en uppdelning mellan marginalen och vadderingen på elementet.

```css
p {
  border: 2px solid black;
}
```

</div>

---

<div style="background: hsl(140, 100%, 25%); padding: 25px; text-align: left;">

### Padding

Vaddering på svenska, distansen mellan elementets kant och elementets innehåll.

```css
p {
  padding: 10px 15px;
}
```

</div>

---

### Shorthands eller inte

Border är en shorthand till `border-width`, `border-style`, och `border-color`.

```css
p {
  border-width: 5px;
  border-style: dashed;
  border-color: green;
}
```

Margin och Padding har samma typ av shorthand och uppdelningar.

---

#### Uppdelat:

```css
body {
  margin-top: 10px;

  padding-right: 20px;

  margin-bottom: 30px;

  padding-left: 40px;
}
```

---

#### Shorthands

```css
body {
  /* Vertical Horizontal */
  margin: 10px 20px;

  /* Top Right Bottom Left (TRBL) */
  padding: 10px 20px 30px 40px;

  /* Top Horizontal Bottom */
  margin: 10px 20px 30px;
}
```

---

### Utsmyckning: Border-radius

- `border-radius` används för att runda hörn på en box. För att det ska synas så behövs antingen en bakgrundsfärg, eller en border
- Likt Margin och Padding så är border-radius en shorthand

---

```css
p {
  border-radius: 30px;
  border-radius: 25% 10%;
  border-radius: 1em 1.5em 0.5em;
}
```

<p style="background: #af0e12; border-radius: 30px; padding: 10px;">Border radius</p>
<p style="background: #af0e12; border-radius: 25% 10%; padding: 10px;">Border radius</p>
<p style="background: #af0e12; border-radius: 1em 1.5em 0.5em; padding: 10px;">Border radius</p>

---

## Specifika egenskaper

Vissa element har specifika egenskaper, till exempel tabeller.

---

```css
table {
  border-collapse: collapse;
}

table,
tr {
  border: 5px solid purple;
}

th {
  background: #444;
}
```

<style>
#hero-table {
  border-collapse: collapse;
  font-size: 0.75em;
}

#hero-table,
#hero-table tr {
  border: 5px solid purple;
}

#hero-table th {
  background: #444;
}
</style>

<table id="hero-table">
  <tr>
    <th>Hero</th>
    <th>Alter-ego</th>
    <th>Power</th>
  </tr>
<tr>
  <th>Iron Man</th>
  <td>Tony Stark</td>
  <td>Super-powered suit</td>
</tr>
<tr>
  <th>Captain America</th>
  <td>Steve Rogers</td>
  <td>Super-human strength</td>
</tr>
<tr>
  <th>Spider-man</th>
  <td>Peter Parker</td>
  <td>Web slingers</td>
</tr>
</table>

---

## Källor:

- [Mozilla Developer Network: Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors)
- [Mozilla Developer Network: CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Styling table](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
