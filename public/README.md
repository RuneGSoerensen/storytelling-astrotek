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
## Trin 3: Oprettelse af Elementer og Eventlytter

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
    
