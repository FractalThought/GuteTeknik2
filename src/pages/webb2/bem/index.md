---
title: "Block Element Modifier"
date: "2020-02-26"
---

## Vad är det?

BEM står för Block Element Modifier, och är en namnkonvention/metodik för att skapa återanvändningsbara komponenter, och enklare dela kod i frontend-utveckling.

Metodiken går ut på att man definierar komponentens beståndsdelar i Block och Element, och deras varianter med Modifier.

## Block

Komponentens huvuddel, det element som kapslar in alla andra element, kallas i BEM för block.

## Element

De element som ligger inuti komponentens block kallas i BEM för element.

## Modifier

Ibland vill man skapa alternativa delar som ser annorlunda ut från

## Exempel och syntax

### HTML

```html
<section class="social-card">
  <img
    class="social-card__profile-image"
    alt="First profile"
    src="profile1.png"
  />
  <p class="social-card__desc">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et quaerat
    quos error, ipsa delectus?
  </p>
  <div class="social-card__button-container">
    <a href="#" class="social-card__button social-card__button--primary"
      >Contact</a
    >
    <a href="#" class="social-card__button">Go to profile</a>
  </div>
</section>
```

### CSS

```css
.social-card {
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.social-card__profile-image {
  border-radius: var(--border-radius-image);
}

.social-card__desc {
  color: var(--gray4);
}

.social-card__button-container {
  display: flex;
}

.social-card__button {
  display: block;
  padding: var(--pd-sm);
  border-radius: var(--br-sm);
  color: var(--gray1);
  background: var(--gray5);
}

.social-card__button--primary {
  background: var(--primary5);
}
```

Se ett mer utförligt [exempel på CodePen](https://codepen.io/GuteFelix/pen/QWbaJqV).

[Presentationen för BEM (Figma)](https://www.figma.com/proto/Vn47JszfXWFq5OGxtYGHoz/BEM?node-id=1%3A2&viewport=357%2C371%2C0.41383543610572815&scaling=min-zoom)

## Källor:

- [GetBem.com](http://getbem.com/)
- [CSS Tricks: BEM 101](https://css-tricks.com/bem-101/)
- [BEM.info](https://en.bem.info/)
- [Kevin Powell: Why I use BEM naming convention for CSS (video)](https://www.youtube.com/watch?v=SLjHSVwXYq4)
- [dcode: The Block Element Modifier (BEM) Naming Convention (Methodology) - CSS Tutorial (video)](https://www.youtube.com/watch?v=u-XKw585KqY)
- [Card UI Design: Fundamentals and examples](https://www.justinmind.com/blog/cards-ui-design/)
- [15 Examples of popular card UI designs](https://www.mockplus.com/blog/post/card-ui-design)