# Nog te controleren

Bij het overnemen van yvg.nl zijn deze punten verouderd, onduidelijk of onvolledig gebleken.
In de pagina's staan ze als `<!-- CONTROLEREN: ... -->`. Haal die opmerking weg zodra het is nagekeken.

## bestuur.html

- op yvg.nl stond "Met alle recente wijzigingen zijn we deze pagina nog aan het updaten en aanvullen". Controleer of het bestuur compleet en actueel is; de functies secretaris en bestuurder afdeling Schaatsen (wedstrijdrijders) zijn ad interim ingevuld.

## clubkleding.html

- de prijzen en foto's stonden sinds maart 2023 op yvg.nl. Controleer of de prijzen nog kloppen.

## contact.html

De 9 formulieren van yvg.nl staan nu op de contactpagina en worden verstuurd door `verstuur.php`. Naar welk adres elk formulier gaat, staat in `php/config.php`. Op yvg.nl waren de ontvangers niet zichtbaar; controleer daarom deze adressen in `php/config.php`:

- vragen over schaatsen → afdeling_schaatsen@yvg.nl; lidmaatschap → ledenadministratie@yvg.nl; inline-skaten → zomertraining@yvg.nl.
- 'Overige vragen en opmerkingen' → info@yvg.nl. Op yvg.nl stond hiervoor nergens een adres.
- proeftraining jeugd → jeugdcommissie@yvg.nl; proeftraining recreant en wedstrijdrijder → afdeling_schaatsen@yvg.nl. Proefleden worden volgens de site aangemeld door de trainerscoördinatoren (Afdeling Schaatsen).
- financiële administratie → penningmeester@yvg.nl (de penningmeester staat op de bestuurspagina bij 'Financiën'); website → communicatie@yvg.nl (de afdeling Communicatie beheert de website).
- afzender van de mails is website@yvg.nl. Gebruik een adres op het domein waar de site komt te staan, anders komen de mails in de spam.
- de keuzes bij de proeftrainingen komen van de formulieren op yvg.nl, maar met de tijden van trainingstijden.html. Die verschilden: voor recreanten stond in het formulier 'dinsdag- en donderdagochtend 10:00-11:30', in het schema 9.30 – 11.00 uur. Voor de jeugd op woensdag stond in het formulier 16:30-17:45, terwijl de tijd volgens het schema afhangt van de leeftijd; daarom staat er nu 'woensdagmiddag'. Controleer de tijden.
- in het vraagformulier is 'Je bericht' verplicht gemaakt (op yvg.nl was dat niet verplicht, wel het telefoonnummer).

## contributie.html

- deze bestellink is voor de baankaart langebaan van seizoen 2025-2026. Vervang hem door de link voor seizoen 2026-2027.
- op yvg.nl stond hier een schermafbeelding van Mijn Sport050 (in de pagina ingesloten, niet als los bestand). Die is hierboven omgezet naar tekst. Voeg desgewenst een actuele schermafbeelding toe.

## droogtraining.html

- op yvg.nl stond nog "Start trainingen 8 april 2026". Vul hier de startdatum van het nieuwe zomerseizoen in.
- op yvg.nl stond nog "Start trainingen 10 april 2026". Vul hier de startdatum van het nieuwe zomerseizoen in.
- op yvg.nl stond nog "De training recreanten en mastersgroep start op 8 april 2026". Vul de startdatum van het nieuwe zomerseizoen in. Let op: in het overzicht op de pagina Zomertraining staat voor deze training 18.30 – 19.45 uur in plaats van 18.45 uur; graag gelijktrekken.
- in het overzicht op de pagina Zomertraining staat wel een droogtraining voor wedstrijdrijders op woensdag van 18.30 tot 19.45 uur in het Stadspark (met een sterretje zonder uitleg). Geef aan of deze training doorgaat en pas dan beide pagina's aan.

## fietstraining.html

- in het overzicht op de pagina Zomertraining stond voor de fietstraining 18.45 – 20.00 uur. Graag de tijden op beide pagina's gelijktrekken.

## historie.html

- op yvg.nl stond als kop "YVG bestaat al meer dan 155 jaar!" (en in de zijbalk "160 jaar YVG!"). Op 10 november 2026 bestaat YVG 164 jaar; de vaste leeftijd is daarom vervangen door het oprichtingsjaar.
- op yvg.nl stond een tijdlijn met lege rijen voor 1862-1863, 1863-1864 en 1864-1865. Die zijn weggelaten; vul ze aan als er tekst voor is. De overige rijen komen uit de tekst hierboven.

## inline-skaten.html

- op yvg.nl stond nog "De skeelertrainingen starten op 13 april 2026. Vanwege meivakantie en Koningsdag is er geen skeeleren op 20 april en 27 april. We gaan weer verder op 4 mei." Vul hier de startdatum en eventuele vrije data van het nieuwe zomerseizoen in.

## jeugd.html

- dit overzicht is van seizoen 2025-2026. Vervang de link door die van het huidige seizoen.
- op yvg.nl stond nog "We starten dit seizoen op 12 oktober 2024". Vul hier de startdatum van het huidige seizoen in.

## kalender.html

- op een statische site werkt de kalender niet automatisch. Deze lijst moet met de hand worden bijgehouden: voeg nieuwe activiteiten toe en haal voorbije activiteiten weg. Overgenomen uit de maandweergave van november 2026 op yvg.nl (stand 6 november 2026); activiteiten vóór vandaag (YVG-clubwedstrijd 31 oktober, YVG-uur en de verplaatste slijpcursus van 1 november) zijn weggelaten. Volgens yvg.nl stonden er in totaal 42 activiteiten in de kalender; activiteiten na 6 december 2026 ontbreken nog.
- deze abonnementslinks halen de kalender op uit de huidige WordPress-site op yvg.nl en werken alleen zolang die site online is.

## lid-worden.html

- controleer of de prijs van de tijdelijke baankaart (€30) nog klopt voor seizoen 2026-2027.

## mijn-yvg.html

- de stappen zijn aangepast aan het huidige inlogscherm van AllUnited (knoppen 'Inloggen' en 'Nieuw wachtwoord aanvragen'). Controleer of de wachtwoordeisen (6 tekens, waarvan 2 cijfers) nog kloppen.

## nieuws.html

- de berichten zelf zijn niet overgenomen en de links verwijzen naar de huidige WordPress-site op yvg.nl. Als die site verdwijnt, moeten de berichten worden overgezet of de links worden aangepast. Nieuwe berichten moeten op deze statische site met de hand aan deze lijst worden toegevoegd.
- de URL van dit bericht noemt nog "geen skeeleren op 20 en 27 april" (oud bericht hergebruikt), terwijl de titel over 31 augustus gaat.

## statuten.html

- de statuten zijn in 2016 online gezet en het huishoudelijk reglement is van 10 augustus 2014. Controleer of dit de laatste versies zijn.
- de privacyverklaring is van 10 mei 2018 (deze pdf stond ook als privacylink in de footer van yvg.nl). Controleer of hij nog actueel is en vervang hem zo nodig door een nieuwe versie.

## trainingstijden.html

- op yvg.nl stond nog "Vanaf zaterdag 12 oktober 2024 starten de trainingen." Vul hier de startdatum van seizoen 2026-2027 in.

## veelgestelde-vragen.html

- op yvg.nl linkte dit antwoord naar administratie.yvg.nl/pages/16/lid-worden/, terwijl de pagina Lid worden naar AllUnited verwijst. Nu verwijst het naar lid-worden.html; controleer welk inschrijfadres juist is.
- op yvg.nl stond hier "De baankaart wordt verstrekt door de YVG-ledenadministratie", maar op de contributiepagina staat dat je de baankaart zelf digitaal koopt bij KNSB Groningen/Drenthe. Hier is naar de contributiepagina verwezen; controleer wat juist is.

## vertrouwenscontactpersoon.html

- op yvg.nl werd afwisselend over één en over meerdere vertrouwenscontactpersonen gesproken, maar er stond er maar één vermeld (Ben Emans, foto uit 2019). Controleer of hij nog vertrouwenscontactpersoon is en of er meer zijn; de tekst is nu in het enkelvoud.
- op yvg.nl linkte de gedragscode naar een oude versie uit 2016 (https://www.yvg.nl/wp-content/uploads/2019/11/Gedragscode_20161001.pdf); vervangen door de versie uit 2025 die ook op de pagina Statuten staat. De links naar het "Protocol Sociaal Veilige sportomgeving t.b.v. grensoverschrijdend gedrag" (sportopleidingen.nl/media/1094/...) en de "Toolkit/handboek sociaal veilige sportomgeving" (centrumveiligesport.nl/doelgroepen/bestuurders-en-begeleiders/stappenplan) gaven een 404-fout; vervangen door de homepage van Centrum Veilige Sport Nederland. Vul zo nodig de juiste, actuele links in.

## voorkom-blessures.html

- op yvg.nl was deze tekst in de wij-vorm geschreven door Fitwerk30 ("bieden wij", "onze website"), zonder dat de naam Fitwerk30 in de tekst stond. Hier is dat omgezet naar de derde persoon. Controleer of het aanbod van Fitwerk30 nog actueel is.

## yvg-uur.html

- op yvg.nl stond "Dit seizoen vindt het YVG-uur plaats op zondag van 17.00 uur tot 18.00 uur", zonder te vermelden om welk seizoen het gaat. Controleer of deze tijd ook voor seizoen 2026-2027 klopt.

## zomertraining.html

- de startdata op de trainingspagina's waren die van 2026. Zet daar de startdata van het nieuwe zomerseizoen neer zodra die bekend zijn, en controleer ook of dit weekoverzicht nog klopt.
- op de pagina Fietstraining staat dat de training om 18.30 uur begint en vanaf mei om 18.45 uur, en ongeveer 1,5 uur duurt. Hier stond 18.45 – 20.00 uur. Graag gelijktrekken.
- op de pagina Droogtraining staat dat de training voor recreanten om 18.45 uur begint; hier stond 18.30 – 19.45 uur. Graag gelijktrekken.
- in de bron stond bij deze training een sterretje zonder uitleg, en op de pagina Droogtraining staat dat er voor wedstrijdrijders "nog naar de mogelijkheden wordt gekeken". Daarom staat hier "onder voorbehoud". Bevestigen of deze training doorgaat.
