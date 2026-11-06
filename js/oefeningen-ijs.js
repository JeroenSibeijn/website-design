/*
  Oefeningen-database: OP HET IJS (langebaanschaatsen)

  Een oefening toevoegen? Kopieer een regel in "oefeningen" en pas hem aan. Velden:
    naam      – naam van de oefening
    soort     – id van een soort uit "soorten" hieronder
    materiaal – een sleutel uit "materiaal" hieronder
    vorm      – (optioneel) andere vorm dan de soort: reps | interval | single | minuten | duur | rondes | sprint
    spieren   – waar de oefening op gericht is
    uitleg    – korte uitleg hoe je de oefening doet

  Vormen:
    rondes  – sets × rondes (1 ronde = 400 m)
    sprint  – sets × meters (korte sprints van 50 tot 150 m)
    minuten – eenmalig blok van 5 tot 15 minuten
    duur    – lang blok van 15 tot 40 minuten
*/

window.DATABASES = window.DATABASES || {};

window.DATABASES.ijs = {
  naam: 'Op het ijs',

  materiaal: {
    geen: 'Geen materiaal',
    pionnen: 'Pionnen of blokjes',
    partner: 'Trainingsmaatje',
    elastiek: 'Trekelastiek'
  },
  standaardMateriaal: ['geen', 'pionnen'],

  // Standaard volgorde van de training
  soorten: [
    { id: 'inrijden',     naam: 'Inrijden',             kleur: 0, vorm: 'minuten', aantal: 1, aan: true },
    { id: 'techniek',     naam: 'Techniek rechte stuk', kleur: 1, vorm: 'rondes',  aantal: 3, aan: true },
    { id: 'bocht',        naam: 'Bochtenwerk',          kleur: 2, vorm: 'rondes',  aantal: 2, aan: true },
    { id: 'start',        naam: 'Starts en sprints',    kleur: 3, vorm: 'sprint',  aantal: 2, aan: true },
    { id: 'interval',     naam: 'Intervallen',          kleur: 4, vorm: 'rondes',  aantal: 2, aan: true },
    { id: 'steigrunnen',  naam: 'Steigrunnen',          kleur: 7, vorm: 'rondes',  aantal: 2, aan: false },
    { id: 'duur',         naam: 'Duurschaatsen',        kleur: 5, vorm: 'duur',    aantal: 1, aan: false },
    { id: 'uitrijden',    naam: 'Uitrijden',            kleur: 6, vorm: 'minuten', aantal: 1, aan: true }
  ],

  oefeningen: [
    // ---------- Inrijden ----------
    { naam: 'Rustig inrijden', soort: 'inrijden', materiaal: 'geen', spieren: ['warm worden'], uitleg: 'Rustige rondjes in een comfortabele zit. Begin hoog en zak langzaam dieper naarmate je warmer wordt.' },
    { naam: 'Opbouwend inrijden', soort: 'inrijden', materiaal: 'geen', spieren: ['warm worden', 'tempo'], uitleg: 'Begin heel rustig en voer elke ronde het tempo een klein beetje op. Eindig op ongeveer de helft van je wedstrijdtempo.' },
    { naam: 'Inrijden met lange halen', soort: 'inrijden', materiaal: 'geen', spieren: ['glijfase', 'balans'], uitleg: 'Rustig schaatsen met zo lang mogelijk uitglijden op elke schaats. Focus op een rustig ritme.' },
    { naam: 'Dynamisch losmaken op het ijs', soort: 'inrijden', materiaal: 'geen', spieren: ['mobiliteit'], uitleg: 'Al schaatsend afwisselen: armcirkels, knieheffen tijdens het glijden en kort diep door de knieën zakken.' },
    { naam: 'Inrijden met armzwaai', soort: 'inrijden', materiaal: 'geen', spieren: ['coördinatie', 'warm worden'], uitleg: 'Rustig schaatsen met een losse, ontspannen armzwaai die meegaat met je afzet.' },

    // ---------- Techniek rechte stuk ----------
    { naam: 'Zitoefening', soort: 'techniek', materiaal: 'geen', spieren: ['schaatshouding', 'bovenbenen'], uitleg: 'Schaats in je diepste zit met je handen op de rug. Knieën ver voorover, bovenlichaam bijna horizontaal.' },
    { naam: 'Eenbenig glijden', soort: 'techniek', materiaal: 'geen', spieren: ['balans', 'glijfase'], uitleg: 'Glijd zo lang mogelijk op één schaats met de andere voet naast je enkel. Wissel per recht stuk van been.' },
    { naam: 'Bijhalen en neerzetten', soort: 'techniek', materiaal: 'geen', spieren: ['techniek'], uitleg: 'Concentreer je op het bijhalen van je been onder je lichaam en het neerzetten op de buitenkant van je schaats.' },
    { naam: 'Tikoefening', soort: 'techniek', materiaal: 'geen', spieren: ['techniek', 'balans'], uitleg: 'Tik bij het bijhalen met je schaats kort op het ijs naast je standbeen, voordat je hem neerzet.' },
    { naam: 'Zijwaartse afzet met handen op de knieën', soort: 'techniek', materiaal: 'geen', spieren: ['afzet', 'billen'], uitleg: 'Leg je handen op je knieën en zet puur zijwaarts af. Voel dat de afzet uit je heup en bil komt.' },
    { naam: 'Schaatsen met handen op de rug', soort: 'techniek', materiaal: 'geen', spieren: ['schaatshouding', 'balans'], uitleg: 'Schaats zonder armzwaai met beide handen op de rug. Houd je bovenlichaam stil en laag.' },
    { naam: 'Volle armzwaai', soort: 'techniek', materiaal: 'geen', spieren: ['coördinatie', 'ritme'], uitleg: 'Schaats met een volle armzwaai en let op de timing: arm en afzet gaan tegelijk naar buiten.' },
    { naam: 'Nadruk op de buitenkant', soort: 'techniek', materiaal: 'geen', spieren: ['techniek', 'balans'], uitleg: 'Zet je schaats op de buitenkant neer en rol pas tijdens de afzet naar de binnenkant.' },
    { naam: 'In de pas achter een maatje', soort: 'techniek', materiaal: 'partner', spieren: ['ritme', 'techniek'], uitleg: 'Schaats vlak achter een maatje en probeer precies tegelijk af te zetten en bij te halen.' },
    { naam: 'Afzet tegen het trekelastiek', soort: 'techniek', materiaal: 'elastiek', spieren: ['afzet', 'kracht'], uitleg: 'Een maatje houdt een elastiek om je heupen vast terwijl jij afzet. Voel de zijwaartse afzet tegen de weerstand.' },
    { naam: 'Slalom tussen pionnen', soort: 'techniek', materiaal: 'pionnen', spieren: ['kantwerk', 'balans'], uitleg: 'Zet pionnen op een rij op het middenveld en schaats er in vloeiende boogjes tussendoor.' },

    // ---------- Bochtenwerk ----------
    { naam: 'Pootje-over in lage zit', soort: 'bocht', materiaal: 'geen', spieren: ['bochttechniek', 'bovenbenen'], uitleg: 'Kruis je rechterbeen over je linker in de bocht. Houd je zit laag en je schouders stil.' },
    { naam: 'Bocht glijden op links', soort: 'bocht', materiaal: 'geen', spieren: ['balans', 'buitenkant'], uitleg: 'Glijd een deel van de bocht op alleen je linkerschaats, op de buitenkant van het ijzer.' },
    { naam: 'Bocht met handen op de rug', soort: 'bocht', materiaal: 'geen', spieren: ['bochttechniek', 'balans'], uitleg: 'Neem de bocht met beide handen op de rug. Zo merk je goed of je balans in de bocht klopt.' },
    { naam: 'Bocht met één arm zwaaien', soort: 'bocht', materiaal: 'geen', spieren: ['coördinatie'], uitleg: 'Linkerhand op de rug, alleen je rechterarm zwaait mee, zoals in een wedstrijd.' },
    { naam: 'Achtjes rond pionnen', soort: 'bocht', materiaal: 'pionnen', spieren: ['bochttechniek', 'links en rechts'], uitleg: 'Schaats achtjes rond twee pionnen op het middenveld. Zo oefen je bochten naar links en naar rechts.' },
    { naam: 'Kleine cirkels om een pion', soort: 'bocht', materiaal: 'pionnen', spieren: ['bochttechniek', 'kantwerk'], uitleg: 'Schaats pootje-over rond een pion en maak de cirkel steeds kleiner.' },
    { naam: 'Versnellen uit de bocht', soort: 'bocht', materiaal: 'geen', spieren: ['snelheid', 'afzet'], uitleg: 'Zet de laatste meters van de bocht extra aan en neem de snelheid mee het rechte stuk op.' },
    { naam: 'Insturen van de bocht', soort: 'bocht', materiaal: 'geen', spieren: ['bochttechniek'], uitleg: 'Oefen het begin van de bocht: hoofd en schouders gaan eerst mee naar binnen, je heupen blijven laag.' },

    // ---------- Starts en sprints ----------
    { naam: 'Staande start', soort: 'start', materiaal: 'geen', spieren: ['explosiviteit'], uitleg: 'Start vanuit de wedstrijdhouding met je voorste schaats schuin op de lijn en sprint weg.' },
    { naam: 'Loopstart', soort: 'start', materiaal: 'geen', spieren: ['explosiviteit', 'frequentie'], uitleg: 'De eerste 5 tot 8 passen zijn korte, snelle loopstapjes op de punten van je schaatsen. Ga daarna over in glijdende slagen.' },
    { naam: 'Vliegende sprint', soort: 'start', materiaal: 'geen', spieren: ['topsnelheid'], uitleg: 'Bouw een halve ronde snelheid op en sprint dan voluit over de aangegeven afstand.' },
    { naam: 'Reactiestart op signaal', soort: 'start', materiaal: 'partner', spieren: ['reactie', 'explosiviteit'], uitleg: 'Een maatje geeft een klap of roept "af". Reageer zo snel mogelijk en sprint weg.' },
    { naam: 'Sprint met maximale frequentie', soort: 'start', materiaal: 'geen', spieren: ['frequentie'], uitleg: 'Sprint met korte, zeer snelle slagen. Het gaat om het tempo van je benen, niet om lange halen.' },
    { naam: 'Sprint uit de bocht', soort: 'start', materiaal: 'geen', spieren: ['snelheid', 'bochttechniek'], uitleg: 'Begin de sprint halverwege de bocht met pootje-over en sprint het rechte stuk op.' },
    { naam: 'Starts met pionnen', soort: 'start', materiaal: 'pionnen', spieren: ['explosiviteit'], uitleg: 'Zet pionnen op 10, 20 en 30 meter. Sprint naar de eerste en zorg dat je bij elke pion nog versnelt.' },

    // ---------- Intervallen ----------
    { naam: 'Tempo-intervallen', soort: 'interval', materiaal: 'geen', spieren: ['uithoudingsvermogen'], uitleg: 'Schaats in een hoog en gelijkmatig tempo. Schaats tussen de sets rustig uit.' },
    { naam: 'Opbouwende intervallen', soort: 'interval', materiaal: 'geen', spieren: ['tempogevoel'], uitleg: 'Elke ronde binnen de set schaats je iets sneller dan de ronde ervoor.' },
    { naam: 'Rechte stukken hard, bochten rustig', soort: 'interval', materiaal: 'geen', spieren: ['wisselend tempo'], uitleg: 'Schaats de rechte stukken hard en de bochten rustig, en houd dit vol voor de hele set.' },
    { naam: 'Bochten hard, rechte stukken rustig', soort: 'interval', materiaal: 'geen', spieren: ['bochtkracht'], uitleg: 'Zet aan in de bochten en herstel op de rechte stukken. Goed voor kracht in de bocht.' },
    { naam: 'Wedstrijdtempo', soort: 'interval', materiaal: 'geen', spieren: ['tempogevoel'], uitleg: 'Schaats precies in het tempo dat je in een wedstrijd wilt rijden. Gebruik je rondetijden.' },
    { naam: 'Treintje met kopwissel', soort: 'interval', materiaal: 'partner', spieren: ['uithoudingsvermogen', 'samenwerken'], uitleg: 'Schaats in een groepje achter elkaar en wissel elke ronde van voorste schaatser.' },

    // ---------- Steigrunnen ----------
    { naam: '100 m Steigrunnen', soort: 'steigrunnen', materiaal: 'geen', spieren: ['kracht', 'uithoudingsvermogen'], uitleg: 'Begin aan het begin van het rechtre stuk heel langzaam te schaatsen en ga steeds een beetje harder rijden. Aan het einde van het rechtestuk rij je op je snelst en kom je weer overeind.' },
    { naam: '200 m Steigrunnen', soort: 'steigrunnen', materiaal: 'geen', spieren: ['kracht', 'uithoudingsvermogen'], uitleg: 'Begin aan het begin van het rechte stuk heel langzaam te schaatsen en ga steeds een beetje harder rijden. Aan het einde van de eerste bocht rij je op je snelst en kom je weer overeind.' },
    { naam: '300 m Steigrunnen', soort: 'steigrunnen', materiaal: 'geen', spieren: ['kracht', 'uithoudingsvermogen'], uitleg: 'Begin aan het begin van het rechte stuk heel langzaam te schaatsen en ga steeds een beetje harder rijden. Aan het einde van het tweede rechtestuk rij je op je snelst en kom je weer overeind.' },  



    // ---------- Duur ----------
    { naam: 'Duurschaatsen in vlak tempo', soort: 'duur', materiaal: 'geen', spieren: ['basisconditie'], uitleg: 'Schaats lang achter elkaar in een rustig, gelijkmatig tempo waarin je nog kunt praten.' },
    { naam: 'Duurschaatsen met techniekfocus', soort: 'duur', materiaal: 'geen', spieren: ['basisconditie', 'techniek'], uitleg: 'Rustige duurtraining waarbij je elke paar rondes op één techniekpunt let, zoals bijhalen of zit.' },
    { naam: 'Duur met tempowissels', soort: 'duur', materiaal: 'geen', spieren: ['basisconditie', 'tempo'], uitleg: 'Schaats lang en wissel elke 2 rondes tussen rustig en iets sneller tempo.' },
    { naam: 'Groepsduur in een treintje', soort: 'duur', materiaal: 'partner', spieren: ['basisconditie', 'samenwerken'], uitleg: 'Schaats lang in een treintje en wissel regelmatig van kop.' },

    // ---------- Uitrijden ----------
    { naam: 'Rustig uitrijden', soort: 'uitrijden', materiaal: 'geen', spieren: ['herstel'], uitleg: 'Ontspannen rondjes in een hoge houding. Laat je hartslag rustig zakken.' },
    { naam: 'Uitrijden met lange halen', soort: 'uitrijden', materiaal: 'geen', spieren: ['herstel', 'glijfase'], uitleg: 'Rustig uitschaatsen met lange, ontspannen glijfases en een rustige ademhaling.' },
    { naam: 'Uitrijden en rekken aan de boarding', soort: 'uitrijden', materiaal: 'geen', spieren: ['herstel', 'mobiliteit'], uitleg: 'Wissel rustige rondjes af met korte rekoefeningen aan de boarding voor je heupbuigers, bovenbenen en kuiten.' }
  ]
};
