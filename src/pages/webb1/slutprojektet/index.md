---
title: "Slutprojektet"
date: "2020-04-22"
---

I det sista projektet förfinar du den kunskap du anskaffat dig under tidigare projekt, och tar det till nästa nivå.

## Vad du ska göra

Du får själv bestämma vad din hemsida ska handla om, men den behöver ha med följande:

1. En startsida samt minst 2 sidor till med innehåll (text och bild).
   Textinnehållet skapar du själv, bilderna behöver vara lagligt framskaffade (till exempel via Unsplash där du ger erkännande för vem som tagit bilden, eller egna bilder).
2. Samtliga sidor förutom startsidan ska ha samma grundlayout. Din startsida kan se annorlunda ut, eller se likadan ut.
3. Minst 3 bilder som är optimerade för webben (använd ett optimeringsverktyg så som [Squoosh.app](https://squoosh.app/) för att minska både bildstorleken och filstorleken).

### Förutom hemsidan behöver du göra följande:

1. **Planera ditt arbete**. Du visar detta genom att skicka med en länk till din Figma-design, eller skickar med en skriven planering i ett Word-dokument (minst 300 ord).
2. **Dokumentera ditt arbete**. Du visar detta genom att skriva en dokumentation om vad du gjort, hur du tänkte, och en reflektion om vad du tyckte om ditt arbete och ditt resultat.
   Din dokumentation kan vara ett HTML-dokument eller och ska motsvara ungefär en A4-sida.

### Vad du behöver visa

Din hemsida behöver visa att du kan använda HTML och CSS för att skapa en hemsida utifrån följande kriterier:

- Du använder korrekt HTML-element för ditt innehåll (tex huvudrubrik är en i en h1-tagg och underrubriker är i h2-h6-taggar och textstycken är i en p-tagg) och du skapar listor och tabeller med HTML.
- CSS används för att stila din HTML och din CSS ska ligga i en separat fil, inte i style-attributet eller style-elementet.
- Du har validerat din hemsida och försökt lösa eventuella valideringsproblem. [Valideringsverktyget hittar du här](https://validator.w3.org/), använd [Validate by File Upload](https://validator.w3.org/#validate_by_upload) för att kolla innan du laddar upp hemsidan.
- Dina texter och bilder är anpassade för webben (texten är lätt att läsa och bilderna är bara så stora de behöver vara).
- Du har tänkt på tillgänglighet, och använder semantisk markup (alltså använd semantiska taggar så som main, nav, header, h1-h6, p, footer samt alt-attributet i dina img-taggar).

Din dokumentation behöver förklara övergripande din arbetsprocess, och ungefär svara på frågorna "Vad gick bra? Vad gick mindre bra/dåligt? Vad har du lärt dig som du tar med dig till nästa gång?"

### Inlämning

Hemsidan publicerar du på [Netlify.com](https://www.netlify.com/) och inlämning sker genom att lämna in länken till din hemsida, samt eventuella andra resurser (planering och dokumentation).

[Videogenomgång om hur man publicerar på Netlify](https://www.youtube.com/watch?v=9RfU6KGNkfE)

# För högre betyg än D

Förutom att göra det ovanstående med "högre kvalité" och mer utförligt, så behöver använda dig av JavaScript.

## JavaScript

JavaScript, även kallat DOM-script, används på webben för att skapa dynamik och interaktion som man inte kan få med bara CSS och HTML.
JavaScript körs lokalt i webbläsaren och kan påverka hemsidans struktur, utseende, och beteende.

Jag kommer inte ha några genomgångar specifikt om JavaScript, men för ett betyg högre än D krävs ändå att du använder minst ett enkelt script på din hemsida.
Det finns mängder med tutorials om JavaScript, och nedan har jag samlat några. Jag rekommenderar specifikt Fredrik Johanssons genomgångar på svenska som ger dig allt du behöver.

### Betygskriterier

För betyget C och högre behöver du skapa något enklare script, till exempel en Alert som sker när du trycker på en knapp eller laddar hemsidan.

För betyget B behöver du använda script som påverkar dokument objekt modellen, alltså hemsidans innehåll.
Till exempel kan du lägga till eller ta bort ett element på sidan, eller ändra utseendet på ett element genom att lägga till en CSS-klass med JavaScript.

För betyget A behöver du använda metodiken unobstrusive JavaScript ([på svenska diskret DOM-skript](http://keryx.se/blogg-69)).

Vad detta innebär är att;

- dina DOM-script är separerade från din HTML och ligger i en egen fil (tex app.js).
- din hemsidas funktion inte är beroende på JavaScript.
- du använder funktionen addEventListener istället för HTML-attributen som skapar events (tex OnClick).

> Tänk på att du ska importera ditt script precis innan sluttaggen för ditt body-element!

### Fredrik Johanssons genomgångar

- [Del 1: Introduktion](https://www.youtube.com/watch?v=QPY-B_-pvWo)
- [Del 2: Ändra bakgrund](https://www.youtube.com/watch?v=NJWr9BZRJbo)
- [Del 3: Kolla kakor, osv](https://www.youtube.com/watch?v=ODcjzQhxY0E)

### JavaScript tutorials

- [Programming with Mosh: JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=W6NZfCO5SIk)
- [Traversy Media: JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)
- [dbwebb: Kom igång med JavaScript och skriv din första kod](https://www.youtube.com/watch?v=jJnfs0DI_o0)
- [The Net Ninja: JavaScript Tutorial For Beginners (spellista)](https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
- [Pink Programming: Lär du programmera med JavaScript (spellista)](https://www.youtube.com/watch?v=OjB7ALAcN-U&list=PL68dG65915X4ruE0Lk5cUMB2keL2sUg3Z) OBS! Mer inriktad på ren programmering, inte webbprogrammering.
