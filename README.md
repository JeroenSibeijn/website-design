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
├── js/formulieren.js       Controle en versturen van de formulieren op contact.html
├── verstuur.php            Verstuurt de formulieren als e-mail
├── php/config.php          Instellingen formulieren: ontvangers per formulier, afzender, testmodus
├── php/formulieren.php     Velden per formulier (voor de controle op de server)
└── images/                 Foto's en logo's
```

## Formulieren en inloggen

**Formulieren.** Op `contact.html` staan dezelfde 9 formulieren als op yvg.nl (6 vraagformulieren en 3 voor een proeftraining). `verstuur.php` controleert ze en mailt ze naar de juiste persoon. Daarvoor is hosting met **PHP 7.4 of nieuwer** nodig. Bijna alle webhosting heeft dat, ook die van yvg.nl.

- **Ontvangers aanpassen:** `php/config.php`, bij `ontvangers`. Bezoekers zien deze adressen niet.
- **Spam:** een verborgen veld, een minimale invultijd en maximaal 5 berichten per 10 minuten per bezoeker.
- **Link naar één formulier:** gebruik `contact.html#` + de naam, bijvoorbeeld `contact.html#proef-jeugd`. Het formulier klapt dan vanzelf open.
- **Een veld toevoegen:** zet het in `contact.html` en in `php/formulieren.php` (zelfde `name`).

Online zetten:

1. Zet alle bestanden op de server, inclusief de map `php/` (met het bestand `.htaccess`, dat de instellingen afschermt).
2. Zet in `php/config.php` bij `afzender` een adres op het domein van de website.
3. Zet `testmodus` op `true` en verstuur elk formulier een keer. De mails worden dan niet verstuurd maar opgeslagen in `formulieren-test.log` in de tijdelijke map van de server. Klopt alles? Zet `testmodus` weer op `false`.
4. Komen er geen mails aan? Vul dan ook `envelope_afzender` in, of vraag de hosting of PHP `mail()` aan staat.

Lokaal (met Live Server of de lokale server) kun je de formulieren invullen en controleren, maar versturen werkt pas op een server met PHP.

**Inloggen.** Leden loggen net als op yvg.nl in op **Mijn YVG** in de ledenadministratie van AllUnited. De knop **Inloggen** in het menu gaat daar direct naartoe (adres in `LOGIN` in `js/layout.js`); `mijn-yvg.html` legt uit hoe je de eerste keer inlogt. Ook **Lid worden** verwijst naar het inschrijfformulier van AllUnited. De website zelf bewaart dus geen wachtwoorden of ledengegevens.

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
