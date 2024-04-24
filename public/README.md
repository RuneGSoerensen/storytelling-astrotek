# INTERAKTIV STORYTELLING - ASTROTEKET
Projektet Astroketet er udviklet af Tina, Rune, Maria og Morten med fokus på udforskning af de forskellige planeter i vores solsystem. 

Denne README.md-fil giver en trinvis gennemgang af integrationen af JSON-data for Venus-sektionen i vores projekt.


# Integrering af JSON Data for Venus-sektionen

Denne README.md fil forklarer integrationen af JSON-data for Venus-sektionen i vores projekt, med fokus på fetching og brug af JSON-objekter.

## Trin 1: html elementer (for lethedens skyld er dette forkortet)
her under ser du den generalle opsætning af vores html elementer, vi har en section med class, venusSide
inde i denne section, har vi en section med Id venus og en anden section som ligger vedsiden af med en class undersidevenus
```html 
 <section id="venusSide">
    <section class="slides" id="venus">
        <div class="underside-button-div">
            <button class="underside-button button-histore" id="venusButton">
              Udforsk viden
            </button>
        </div>
    </section>

    <section class="undersideVenus slides">
        <div
          class="tilbage-button-container venus-tilbage-button"
          id="venusBackButton">
          <button class="tilbage-button">Tilbage</button>
          <img src="media/ikoner/arrow.png" alt="" class="tilbage-arrow" />
        </div>
    </section>
</section>
```
## Trin 2: css opsætning
i vores css har vi stylet sectionen som indeholder venus siden og venus undersiden med en display flex, for at sectionerne ligger vedsiden af hinanden istedet for under hinanden,
```css 
#venusSide {
  display: flex;
  height: 100vh;
  width: 200vw;
}

```
sektionen har også en height på 100vh for at udfylde hele skærmen og en width på 200vw for at give plads til 2 sektioner som kan fylde en fuld side.

herefter har vi givet de nested sectioner en flex 1 for at de hver fylder halvdelen af deres parent.
```css 
.undersideVenus {
  flex: 1;
}
#venus {
  flex: 1;
}
```
vi har også style body med overflow y hidden for at man kun kan se den ene section og har en class som bliver anvendt i vores javascript, ses længere nede.
```css 
body {
  overflow-x: hidden;
}
.bodystuck {
  overflow-y: hidden;
}
```
## Trin 3: Oprettelse af Elementer og eventListeners

her henter vi referencer til de relevante HTML-elementer og knapper i koden ovenover og laver dem til variabler som vi kan bruge i vores javascript
```javascript
const venusSection = document.getElementById("venus");
const venusButton = document.getElementById("venusButton");
const venusUndersideSection = document.getElementsByClassName("undersideVenus")[0];
const venusBackButton = document.getElementById("venusBackButton");
```

herefter tilføj en eventListener til Venus-knappen på onclick, som kalder på vores funktionen, der henter og integrerer JSON-data for Venus
```javascript

venusButton.addEventListener("click", () => {
  createVenus(); 
}); 
```

## Trin 4: Hentning og Integration af JSON Data
herunder har vi vores function som henter og integrere vores JSON data for venus
Fetch sender en HTTP-anmodning for at hente JSON-data fra vores Json fil, som vi har lavet
```javascript
function createVenus() {
  fetch(url) 
```
    så konvertere vi responsen til JSON format

```javascript
    .then(res => res.json()) 
    .then(json => {
```
herefter henter vi historieoplysninger om Venus (som har et index af 2)fra JSON-data og opdater HTML-elementet og giver vores body element en class bodystuck
```javascript
      const venusUndersideTekst = document.getElementById("venusP");
      venusUndersideTekst.innerHTML = `${json[2].history}`;
        document.body.classList.add("bodystuck");
    })
```
tilsidst håndter fejl i tilfælde af problemer med at hente data
```javascript
.catch(error => console.error("error:", error)); 
}
```
    
## Trin 5: animations med javascript
dette kode snippet ligger inde i fetch functionen, her under tager vi fat i de 2 sections og styler og transformer dem til at slide til siden for at skrive fra første section til anden section
```javascript


        venusSection.style.transition = "transform 1s ease-in-out";
        venusSection.style.transform = "translate(-100%)";
        venusUndersideSection.style.transition = "transform 1s ease-in-out";
        venusUndersideSection.style.transform = "translate(-100%)";
```

herefter har vi en funtion som er vores maskot/karakter som vi har sat et setTimeout på for at den først kommer frem 5 sekunder efter knappem er clicked. inde i funktionen har vi taget fat om maskotten, dens tale bubble og bruger json til at tage fat i vores funfact samt ændre vores funfact ptags html
```javascript

        setTimeout(() => {
          const venusUndersideFunFact = document.getElementById("funfact-venus");
          venusUndersideFunFact.innerHTML = `${json[2].funFact}`;  
          const venusBubble = document.getElementsByClassName("venus-funfact")[0];
          const venusMaskot = document.getElementsByClassName("venus-maskot")[0];
```
herefter bruger vi igen transisions til at talebubblen går fra at have en opacity 0 til 1 så den bliver synlig og transformer mascotten til at komme frem med translate ´
```javascript 
          venusBubble.style.transition = "opacity 1s ease-in-out";
          venusBubble.style.opacity =1;
          venusMaskot.style.transition = "transform 1s ease-in-out";
          venusMaskot.style.transform = "translate(80vw, 30vh)";
      }, 5000);

```
## Trin: 6: Reverse animation
her har vi taget fat i vores variable venusBackButton som tager fat i vores button der skal gå tilbage til hoved sektionen, hertil har vi givet den en eventListener og at onlick skal den starte vores reverseVenusAnimation, som vi har lavet under
```javascript
  venusBackButton.addEventListener("click", () => {
    reverseVenusAnimations(venusUndersideSection);
  });
```
tilsidst har vi functionen reverseVenusAnimation som tager de samme elementer fra createVenus og styler dem via css tilbage til deres originale positioner og fjerne classen bodtstuck på vores body element, så vi man kan scroll ned på siden igen.
```javascript
  function reverseVenusAnimations(venusUndersideSection) {
    venusSection.style.transition = "transform 1s ease-in-out";
    venusSection.style.transform = "translate(0)";

    venusUndersideSection.style.transition = "transform 1s ease-in-out";
    venusUndersideSection.style.transform = "translate(0%)";

    document.body.classList.remove("bodystuck");
  }
  ```
dette er det vi har gjordt på alle vores sider som giver dynamikken til at siderne skifter horisontalt istedet for verticalt
