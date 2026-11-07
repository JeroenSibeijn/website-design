# Website IJsvereniging Groningen

Statische versie van yvg.nl in een nieuw design, met een trainingsschema generator.

## Structuur

```
website-design/
├── index.html              Homepage
├── *.html                  Overige pagina's (jeugd.html, contact.html, …)
├── trainingsschema.html    Generator voor willekeurige trainingsschema's
├── css/style.css           Opmaak (kleuren en lettertypes bovenaan in :root)
├── js/layout.js            Kopfoto, menu, nieuwsblok en footer van alle pagina's
│                           (menu in MENU, de 3 nieuwste berichten in NEWS)
├── js/oefeningen-ijs.js    Database: oefeningen op het ijs (langebaan)
├── js/oefeningen-droog.js  Database: oefeningen naast het ijs (droogtraining)
└── images/                 Foto's en logo's
```

## Een pagina toevoegen

1. Kopieer een bestaande pagina, bijvoorbeeld `jeugd.html`, en pas de titel en tekst aan.
2. Zet de pagina in het menu: voeg een regel toe aan `MENU` in `js/layout.js`.

Menu, kruimelpad, zijmenu en footer komen dan vanzelf goed.

Zoek in de pagina's op `CONTROLEREN` voor plekken waar informatie verouderd was of nog aangevuld moet worden.

## Huisstijl

Het design is gebaseerd op yvg.nl: clubgroen `#347631`, donkere footer, koppen in Ubuntu en tekst in Titillium Web.
Alle kleuren staan bovenaan in `css/style.css`. De site is altijd licht, net als yvg.nl; de trainingsschema generator gebruikt dezelfde kleuren.

Foto's in `images/` (van yvg.nl; vervang ze gerust door eigen foto's met dezelfde naam):

- `images/hero.jpg` – grote foto bovenaan de homepage
- `images/jeugd.jpg`, `images/wedstrijd.jpg`, `images/recreatief.jpg` – de drie tegels

Logo (van yvg.nl):

- `images/yvg-logo.png` – officieel clublogo (2022), gebruikt bij "Over YVG"
- `images/yvg-logo-wit-rand.png` – logo met witte rand voor de groene kopbalk
- `images/yvg-icon.png` – icoon voor het browsertabblad en het beginscherm van telefoons

## Bekijken

Open `index.html` in je browser, of gebruik de VS Code-extensie "Live Server" voor automatisch verversen.
