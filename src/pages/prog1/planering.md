---
title: "Veckplanering"
date: "2017-08-10"
---

Här följer veckoplaneringen för kursen. **Uppgiften ska vara klar till nästa lektionspass om inget annat anges.**

###Tid:
v35-43 och v45-51
2 gånger i veckan.

Ändra om så att efter v45 så kör vi ren Unity på programmeringslektionerna, och webbutveckling med javascript på webbutveckling 1. Blir 6 veckor, 12 lektioner, med ren Unity.

| Vecka | Måndag                                                   | Onsdag                                                           |
| ----- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| v34   |                                                          | **Introduktion** <p>Övning 1: Hello World.</p>                   |
| v35   | **Variabler och deras användningsområde och synlighet.** | **Kontrollsatser** <p>Övning 2: If Programming == Fun</p>        |
| v36   | Övning 3: Vem är vad?                                    | **Funktioner** <p>Inlämning 1: En presentation av dig själv.</p> | Arbeta på inlämning 1. |
| v37   | **Arrayer och objekt** <p>Övning 4: Lagerlokalen</p>     | **Iterationssatser**<p>Övning 5: Looping around<p>               |
| v38   |                                                          |                                                                  |
| v39   | **JavaScript på webben och DOM-manipulering.**           | **DOM-manipulering fortsättning.**                               |
| v40   | Inlämning 2: Hitta min nalle                             | Arbeta på inlämning 2                                            |
| v41   |                                                          |
| v42   | ~~Introduktion till React~~                              | ~~React-introduktion fortsättning~~                              |
| v43   |                                                          |
| v44   | **_LOV_**                                                | **_LOV_**                                                        |
| v45   | Unity                                                    | Unity                                                            |

#Uppgifter

##Lektion 2

###IfElseIf
Flera ifsatser ihop.
Flera åldrar:

- Körkort
- Pensionsålder
- Skola

Du ska registrera ålder vid en mässa. Beroende på ålder så ska besökarna få olika färger på sin bricka. Skriv ett program som svarar med rätt färg enligt tabellen:
-0-12, vit
-13-18, grön
-19-25, röd
-26-99, blå
Övrig ålder, skriv ut "Ogiltig ålder"

###Enhance
Förbättra genom att istället för flera ifsatser, använd && och ||.

###WhileIWait och ForTheGreaterLoop
Loopa igenom en counter
Om svaret är JA så ska du använda en for-sats.

Om svaret är NEJ så ska du använda en while-sats.

```javascript
//Typisk for-sats
for(int i=0; i < 10; i++)
{
}

//Går att skriva som en while sats
int i=0;
while(i < 10)
{
    //sist i loop'en:
    i++;
}

//Typisk while-sats
while(i != 0)
{
}

//Går att skriva som en for-sats
for( ; i != 0; )
{
}
```

Skriv ett program som skriver ut talen 1 till 100 på skärmen. Använd en while-loop.
