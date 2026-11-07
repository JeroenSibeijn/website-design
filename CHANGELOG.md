# Changelog

Alle belangrijke wijzigingen aan de website van IJsvereniging Groningen (YVG).
Nieuwste wijzigingen staan bovenaan.

## 2026-11-07 – Opmaak gelijk aan yvg.nl

### Toegevoegd
- Pagina **Veelgestelde vragen** (`veelgestelde-vragen.html`) met uitklapbare vragen over schaatsen, lidmaatschap en meedoen in de vereniging. Te vinden in het menu onder Lidmaatschap en in de footer.
- Kopfoto boven het menu op alle pagina's.
- Nieuwsblok met de drie nieuwste berichten onderaan elke pagina. De berichten staan in `NEWS` in `js/layout.js`; met `<body data-no-news>` laat je het blok weg.
- Balk "Word lid van YVG" boven de footer op alle pagina's.
- Menu: link naar Home, en Mijn YVG bovenaan onder Lidmaatschap.
- `CONTROLEREN.md`: twee punten om na te kijken op de pagina Veelgestelde vragen (inschrijfadres en baankaart).
- Dit changelog.

### Gewijzigd
- Homepage opnieuw ingedeeld zoals yvg.nl: drie fototegels, "Meest recent nieuws", vier ronde iconen en "YVG in de winter" met het clublogo.
- Kopbalk toont alleen het (grotere) logo; de knop "Word lid" heeft een duimpje.
- Footer vernieuwd: "Sinds 1862", "Snel naar" (nu met Veelgestelde vragen en Contact), "KNSB Groningen", en onderaan logo, copyright, privacyverklaring en iconen voor Facebook en Instagram.
- Menunamen gelijk aan yvg.nl: "Zomertraining overzicht", "Historie IJsvereniging Groningen" en "Statuten, reglementen en privacy".
- Huisstijl: groene knoppen met kleine hoeken en een pijltje, tabellen lichtgroen gestreept.
- Trainingsschema generator past bij de nieuwe opmaak: lichte achtergrond onder de paginakop, en de gekozen database (op of naast het ijs) is groen gemarkeerd.

### Verwijderd
- Donkere modus: de site is nu altijd licht, net als yvg.nl.
- Uitgelicht blok over de trainingsschema generator op de homepage. De generator blijft bereikbaar via het menu (Schaatsen) en de footer.

## 2026-11-06 – Eerste versie

### Toegevoegd
- Homepage en subpagina's met de inhoud van yvg.nl: jeugd, wedstrijdschaatsen, recreanten, YVG-uur, trainingstijden, zomertraining (inline-skaten, fietstraining, droogtraining, blessures voorkomen), vereniging (bestuur, clubkleding, historie, vertrouwenscontactpersoon, statuten), kalender, nieuws, lidmaatschap en contact.
- Gedeeld menu en gedeelde footer voor alle pagina's in `js/layout.js`.
- Huisstijl van yvg.nl in `css/style.css`: clubgroen `#347631`, koppen in Ubuntu en tekst in Titillium Web.
- Officieel YVG-logo, logo met witte rand voor de kopbalk en een icoon voor het browsertabblad.
- `CONTROLEREN.md`: lijst met informatie die verouderd leek of nog aangevuld moet worden.
- **Trainingsschema generator** (`trainingsschema.html`) voor langebaanschaatsers:
  - Twee databases: oefeningen op het ijs (`js/oefeningen-ijs.js`) en droogtraining naast het ijs (`js/oefeningen-droog.js`).
  - Soorten oefeningen aan- en uitzetten, het aantal per soort kiezen en de volgorde bepalen met pijltjes of slepen.
  - Rekening houden met beschikbaar materiaal en niveau (licht, gemiddeld, zwaar).
  - Eigen oefeningen toevoegen, standaardoefeningen aanpassen (met "Origineel herstellen") en oefeningen delen via exporteren en importeren.
  - Geschatte tijd per oefening, per blok en in totaal, op basis van de rondetijd van je trainingsgroep.
  - Een training duurt nooit langer dan 1,5 uur; te lange schema's worden automatisch ingekort.
  - Schema kopiëren of printen, oefeningen afvinken en losse oefeningen of blokken opnieuw laten kiezen.

### Gewijzigd
- Gegevens op de pagina's Clubkleding en Contact bijgewerkt.
