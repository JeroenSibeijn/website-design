/*
  Oefeningen-database: NAAST HET IJS (droogtraining voor schaatsers)

  Een oefening toevoegen? Kopieer een regel in "oefeningen" en pas hem aan. Velden:
    naam      – naam van de oefening
    soort     – id van een soort uit "soorten" hieronder
    materiaal – een sleutel uit "materiaal" hieronder
    vorm      – (optioneel) andere vorm dan de soort: reps | interval | single | minuten | duur | rondes | sprint
    spieren   – lijst met spiergroepen
    uitleg    – korte uitleg hoe je de oefening doet

  Tip: oefeningen die bezoekers in de pagina toevoegen kun je exporteren
  ("Exporteer eigen oefeningen"). De regels in dat bestand kun je hier
  direct in de lijst plakken.
*/

window.DATABASES = window.DATABASES || {};

window.DATABASES.droog = {
  naam: 'Naast het ijs',

  materiaal: {
    geen: 'Geen materiaal',
    stoel: 'Stoel of bank',
    step: 'Step of plateau',
    glijplank: 'Glijplank',
    balansbord: 'Balansbord of -kussen',
    dumbbells: 'Dumbbells',
    kettlebell: 'Kettlebell',
    weerstandsband: 'Weerstandsband',
    springtouw: 'Springtouw',
    optrekstang: 'Optrekstang'
  },
  standaardMateriaal: ['geen', 'stoel'],

  // Standaard volgorde van de training
  soorten: [
    { id: 'warm',     naam: 'Warming-up',                kleur: 0, vorm: 'single',   aantal: 3, aan: true },
    { id: 'imitatie', naam: 'Schaatsimitatie',           kleur: 5, vorm: 'interval', aantal: 3, aan: true },
    { id: 'sprong',   naam: 'Sprongkracht',              kleur: 4, vorm: 'reps',     aantal: 2, aan: true },
    { id: 'benen',    naam: 'Benen en billen',           kleur: 2, vorm: 'reps',     aantal: 3, aan: true },
    { id: 'balans',   naam: 'Balans en stabiliteit',     kleur: 7, vorm: 'interval', aantal: 2, aan: false },
    { id: 'core',     naam: 'Core',                      kleur: 3, vorm: 'interval', aantal: 2, aan: true },
    { id: 'boven',    naam: 'Bovenlichaam',              kleur: 1, vorm: 'reps',     aantal: 3, aan: false },
    { id: 'cardio',   naam: 'Cardio',                    kleur: 4, vorm: 'interval', aantal: 2, aan: false },
    { id: 'cool',     naam: 'Stretching / cooling-down', kleur: 6, vorm: 'single',   aantal: 3, aan: true }
  ],

  oefeningen: [
  // ---------- Warming-up ----------
  { naam: 'Jumping jacks', soort: 'warm', materiaal: 'geen', spieren: ['hele lichaam'], uitleg: 'Spring met je benen uit elkaar en klap je handen boven je hoofd. Spring terug naar de beginhouding.' },
  { naam: 'Armcirkels', soort: 'warm', materiaal: 'geen', spieren: ['schouders'], uitleg: 'Armen zijwaarts gestrekt. Maak kleine cirkels die steeds groter worden, halverwege de andere kant op.' },
  { naam: 'Heupcirkels', soort: 'warm', materiaal: 'geen', spieren: ['heupen', 'onderrug'], uitleg: 'Handen op je heupen en draai rustige, grote cirkels met je bekken. Wissel halverwege van richting.' },
  { naam: 'Knieheffen ter plaatse', soort: 'warm', materiaal: 'geen', spieren: ['heupbuigers', 'benen'], uitleg: 'Jog ter plaatse en breng je knieën om en om tot heuphoogte.' },
  { naam: 'Hakken-billen', soort: 'warm', materiaal: 'geen', spieren: ['hamstrings'], uitleg: 'Jog ter plaatse en tik met je hakken om en om tegen je billen.' },
  { naam: 'Inchworms', soort: 'warm', materiaal: 'geen', spieren: ['hamstrings', 'schouders', 'core'], uitleg: 'Buig voorover, loop met je handen naar een plankpositie en loop weer terug naar je voeten.' },
  { naam: 'Lichte squats', soort: 'warm', materiaal: 'geen', spieren: ['benen', 'billen'], uitleg: 'Rustige squats tot halve diepte om je knieën en heupen op te warmen.' },
  { naam: 'Schouderrollen', soort: 'warm', materiaal: 'geen', spieren: ['schouders', 'nek'], uitleg: 'Rol je schouders langzaam naar achteren en daarna naar voren.' },
  { naam: 'Toe touches', soort: 'warm', materiaal: 'geen', spieren: ['hamstrings', 'core'], uitleg: 'Zwaai een gestrekt been omhoog en tik met de andere hand je tenen aan. Om en om.' },
  { naam: 'Lunges met rotatie', soort: 'warm', materiaal: 'geen', spieren: ['benen', 'rug'], uitleg: 'Stap uit in een lunge en draai je bovenlichaam naar de kant van je voorste been.' },
  { naam: "World's greatest stretch", soort: 'warm', materiaal: 'geen', spieren: ['heupen', 'rug', 'hamstrings'], uitleg: 'Ga in een diepe lunge, zet je hand naast je voorste voet en draai je andere arm naar het plafond. Wissel van kant.' },
  { naam: 'Rustig touwtjespringen', soort: 'warm', materiaal: 'springtouw', spieren: ['kuiten', 'conditie'], uitleg: 'Spring in een rustig tempo waarin je nog kunt praten.' },
  { naam: 'Band pull-aparts', soort: 'warm', materiaal: 'weerstandsband', spieren: ['bovenrug', 'schouders'], uitleg: 'Houd de band op schouderhoogte voor je en trek hem uit elkaar tot je armen zijwaarts gestrekt zijn.' },

  // ---------- Bovenlichaam ----------
  { naam: 'Push-ups', soort: 'boven', materiaal: 'geen', spieren: ['borst', 'triceps', 'schouders'], uitleg: 'Handen op schouderbreedte, lichaam in één rechte lijn. Zak tot je borst bijna de grond raakt en duw terug.' },
  { naam: 'Knie-push-ups', soort: 'boven', materiaal: 'geen', spieren: ['borst', 'triceps'], uitleg: 'Een push-up met je knieën op de grond. Fijn om mee te beginnen.' },
  { naam: 'Incline push-ups', soort: 'boven', materiaal: 'stoel', spieren: ['borst', 'triceps'], uitleg: 'Handen op een bank of stevige stoel. Hoe hoger je handen, hoe makkelijker.' },
  { naam: 'Diamond push-ups', soort: 'boven', materiaal: 'geen', spieren: ['triceps', 'borst'], uitleg: 'Handen dicht bij elkaar onder je borst, zodat duimen en wijsvingers een ruit vormen.' },
  { naam: 'Pike push-ups', soort: 'boven', materiaal: 'geen', spieren: ['schouders', 'triceps'], uitleg: 'Billen hoog in een omgekeerde V. Buig je ellebogen en breng je hoofd richting de grond.' },
  { naam: 'Dips op een stoel', soort: 'boven', materiaal: 'stoel', spieren: ['triceps', 'schouders'], uitleg: 'Handen achter je op de rand van een stoel. Zak door je ellebogen tot 90 graden te buigen en duw terug.' },
  { naam: 'Plank shoulder taps', soort: 'boven', materiaal: 'geen', spieren: ['schouders', 'core'], uitleg: 'In plankpositie tik je om en om met een hand je andere schouder aan. Houd je heupen stil.' },
  { naam: 'Superman row', soort: 'boven', materiaal: 'geen', spieren: ['bovenrug', 'onderrug'], uitleg: 'Lig op je buik, til armen en borst op en trek je ellebogen naar je zij.' },
  { naam: 'Dumbbell row', soort: 'boven', materiaal: 'dumbbells', spieren: ['rug', 'biceps'], uitleg: 'Voorovergebogen met een rechte rug. Trek de dumbbell naar je heup en laat hem langzaam zakken.' },
  { naam: 'Schouderpress', soort: 'boven', materiaal: 'dumbbells', spieren: ['schouders', 'triceps'], uitleg: 'Dumbbells op schouderhoogte. Druk ze recht omhoog boven je hoofd.' },
  { naam: 'Biceps curls', soort: 'boven', materiaal: 'dumbbells', spieren: ['biceps'], uitleg: 'Ellebogen tegen je zij. Krul de dumbbells omhoog en laat ze langzaam zakken.' },
  { naam: 'Triceps extensions', soort: 'boven', materiaal: 'dumbbells', spieren: ['triceps'], uitleg: 'Houd één dumbbell met beide handen achter je hoofd en strek je armen omhoog.' },
  { naam: 'Zijwaartse raises', soort: 'boven', materiaal: 'dumbbells', spieren: ['schouders'], uitleg: 'Til de dumbbells zijwaarts op tot schouderhoogte, met licht gebogen ellebogen.' },
  { naam: 'Floor press', soort: 'boven', materiaal: 'dumbbells', spieren: ['borst', 'triceps'], uitleg: 'Lig op je rug met je ellebogen op de grond en druk de dumbbells recht omhoog.' },
  { naam: 'Renegade row', soort: 'boven', materiaal: 'dumbbells', spieren: ['rug', 'core'], uitleg: 'In plankpositie met je handen op de dumbbells. Trek om en om een dumbbell naar je heup.' },
  { naam: 'Optrekken', soort: 'boven', materiaal: 'optrekstang', spieren: ['rug', 'biceps'], uitleg: 'Hang aan de stang en trek jezelf op tot je kin boven de stang is. Laat je gecontroleerd zakken.' },
  { naam: 'Band rows', soort: 'boven', materiaal: 'weerstandsband', spieren: ['rug', 'biceps'], uitleg: 'Zet de band vast, trek de uiteinden naar je buik en knijp je schouderbladen samen.' },

  // ---------- Benen en billen ----------
  { naam: 'Squats', soort: 'benen', materiaal: 'geen', spieren: ['bovenbenen', 'billen'], uitleg: 'Voeten op heupbreedte. Zak met je billen naar achteren tot je bovenbenen horizontaal zijn.' },
  { naam: 'Lunges', soort: 'benen', materiaal: 'geen', spieren: ['bovenbenen', 'billen'], uitleg: 'Stap ver naar voren en zak tot beide knieën 90 graden zijn. Duw terug en wissel van been.' },
  { naam: 'Reverse lunges', soort: 'benen', materiaal: 'geen', spieren: ['bovenbenen', 'billen'], uitleg: 'Stap naar achteren in een lunge. Vaak fijner voor de knieën dan een gewone lunge.' },
  { naam: 'Zijwaartse lunges', soort: 'benen', materiaal: 'geen', spieren: ['bovenbenen', 'binnenkant bovenbeen'], uitleg: 'Stap breed opzij en zak door dat been. Het andere been blijft gestrekt.' },
  { naam: 'Bulgarian split squats', soort: 'benen', materiaal: 'stoel', spieren: ['bovenbenen', 'billen'], uitleg: 'Achterste voet op een stoel. Zak door je voorste been tot je knie 90 graden is.' },
  { naam: 'Glute bridges', soort: 'benen', materiaal: 'geen', spieren: ['billen', 'hamstrings'], uitleg: 'Lig op je rug met gebogen knieën en duw je heupen omhoog. Knijp bovenin je billen aan.' },
  { naam: 'Sumo squats', soort: 'benen', materiaal: 'geen', spieren: ['binnenkant bovenbeen', 'billen'], uitleg: 'Wijde stand met je tenen naar buiten. Zak recht naar beneden.' },
  { naam: 'Step-ups', soort: 'benen', materiaal: 'stoel', spieren: ['bovenbenen', 'billen'], uitleg: 'Stap op een stevige stoel of traptree, strek je been helemaal en stap terug.' },
  { naam: 'Kuitheffen', soort: 'benen', materiaal: 'geen', spieren: ['kuiten'], uitleg: 'Ga op je tenen staan en zak langzaam terug. Zwaarder op één been.' },
  { naam: 'Single-leg deadlift', soort: 'benen', materiaal: 'geen', spieren: ['hamstrings', 'billen', 'balans'], uitleg: 'Sta op één been en kantel voorover terwijl je andere been naar achteren gaat. Rug recht.' },
  { naam: 'Jump squats', soort: 'benen', materiaal: 'geen', spieren: ['bovenbenen', 'explosiviteit'], uitleg: 'Squat en spring explosief omhoog. Land zacht en ga meteen door.' },
  { naam: 'Goblet squats', soort: 'benen', materiaal: 'dumbbells', spieren: ['bovenbenen', 'billen'], uitleg: 'Houd een dumbbell rechtop voor je borst en squat zo diep als goed voelt.' },
  { naam: 'Romanian deadlift', soort: 'benen', materiaal: 'dumbbells', spieren: ['hamstrings', 'billen', 'onderrug'], uitleg: 'Dumbbells voor je benen. Duw je heupen naar achteren met een rechte rug tot je de achterkant van je benen voelt rekken.' },
  { naam: 'Kettlebell swings', soort: 'benen', materiaal: 'kettlebell', spieren: ['billen', 'hamstrings', 'core'], uitleg: 'Zwaai de kettlebell tussen je benen door en stuw hem met je heupen naar borsthoogte.' },
  { naam: 'Monster walk', soort: 'benen', materiaal: 'weerstandsband', spieren: ['billen (zijkant)'], uitleg: 'Band om je knieën, licht door je knieën en stap zijwaarts met spanning op de band.' },

  // ---------- Core ----------
  { naam: 'Plank', soort: 'core', materiaal: 'geen', spieren: ['buik', 'core'], uitleg: 'Op je onderarmen en tenen, lichaam in één rechte lijn. Span je buik en billen aan.' },
  { naam: 'Zijplank', soort: 'core', materiaal: 'geen', spieren: ['schuine buikspieren'], uitleg: 'Op één onderarm op je zij met je heupen omhoog. Halverwege wissel je van kant.' },
  { naam: 'Mountain climbers', soort: 'core', materiaal: 'geen', spieren: ['core', 'conditie'], uitleg: 'In plankpositie trek je om en om snel je knieën naar je borst.' },
  { naam: 'Dead bug', soort: 'core', materiaal: 'geen', spieren: ['diepe buikspieren'], uitleg: 'Op je rug, armen omhoog, knieën in 90 graden. Strek om en om je tegenovergestelde arm en been, met je onderrug op de grond.' },
  { naam: 'Bicycle crunches', soort: 'core', materiaal: 'geen', spieren: ['buik', 'schuine buikspieren'], uitleg: 'Op je rug. Breng om en om je elleboog naar je tegenovergestelde knie.' },
  { naam: 'Hollow hold', soort: 'core', materiaal: 'geen', spieren: ['buik'], uitleg: 'Op je rug. Til je schouders en gestrekte benen een stukje op en houd je onderrug tegen de grond.' },
  { naam: 'Russian twists', soort: 'core', materiaal: 'geen', spieren: ['schuine buikspieren'], uitleg: 'Zit met je voeten iets van de grond, leun achterover en draai je romp van links naar rechts.' },
  { naam: 'Leg raises', soort: 'core', materiaal: 'geen', spieren: ['onderbuik'], uitleg: 'Op je rug. Til je gestrekte benen tot 90 graden en laat ze langzaam zakken zonder de grond te raken.' },
  { naam: 'Bird dog', soort: 'core', materiaal: 'geen', spieren: ['onderrug', 'core', 'balans'], uitleg: 'Op handen en knieën. Strek om en om je tegenovergestelde arm en been.' },
  { naam: 'Flutter kicks', soort: 'core', materiaal: 'geen', spieren: ['onderbuik'], uitleg: 'Op je rug met je benen net boven de grond. Maak kleine, snelle trapbewegingen op en neer.' },
  { naam: 'Crunches', soort: 'core', materiaal: 'geen', spieren: ['buik'], uitleg: 'Op je rug met gebogen knieën. Rol je schouders van de grond richting je knieën.' },
  { naam: 'Plank up-downs', soort: 'core', materiaal: 'geen', spieren: ['core', 'schouders', 'triceps'], uitleg: 'Wissel om en om tussen een plank op je onderarmen en een plank op je handen.' },
  { naam: 'Bear hold', soort: 'core', materiaal: 'geen', spieren: ['core', 'schouders'], uitleg: 'Op handen en tenen met je knieën net boven de grond. Houd je rug plat.' },
  { naam: 'Superman hold', soort: 'core', materiaal: 'geen', spieren: ['onderrug', 'billen'], uitleg: 'Op je buik. Til je armen en benen tegelijk op en houd vast.' },
  { naam: 'Pallof press', soort: 'core', materiaal: 'weerstandsband', spieren: ['core', 'schuine buikspieren'], uitleg: 'Zet de band zijwaarts van je vast. Druk hem recht voor je uit en weersta het draaien.' },
  { naam: 'Hangend knieheffen', soort: 'core', materiaal: 'optrekstang', spieren: ['onderbuik', 'grip'], uitleg: 'Hang aan de stang en trek je knieën gecontroleerd naar je borst.' },

  // ---------- Cardio ----------
  { naam: 'Burpees', soort: 'cardio', materiaal: 'geen', spieren: ['hele lichaam', 'conditie'], uitleg: 'Squat, handen op de grond, spring naar plank, spring terug en spring omhoog.' },
  { naam: 'High knees', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'conditie'], uitleg: 'Ren ter plaatse en breng je knieën zo hoog en snel mogelijk.' },
  { naam: 'Skaters', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'billen', 'conditie'], uitleg: 'Spring zijwaarts van het ene been op het andere, zoals een schaatser.' },
  { naam: 'Touwtjespringen', soort: 'cardio', materiaal: 'springtouw', spieren: ['kuiten', 'conditie'], uitleg: 'Spring in een stevig tempo over het touw en blijf op je voorvoeten.' },
  { naam: 'Double unders', soort: 'cardio', materiaal: 'springtouw', spieren: ['kuiten', 'conditie'], uitleg: 'Laat het touw twee keer onder je door gaan per sprong.' },
  { naam: 'Plank jacks', soort: 'cardio', materiaal: 'geen', spieren: ['core', 'conditie'], uitleg: 'In plankpositie spring je met je voeten uit elkaar en weer terug.' },
  { naam: 'Sprint ter plaatse', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'conditie'], uitleg: 'Sprint zo snel mogelijk ter plaatse en gebruik actief je armen.' },
  { naam: 'Shadow boxing', soort: 'cardio', materiaal: 'geen', spieren: ['schouders', 'conditie'], uitleg: 'Boks in de lucht met verschillende stoten en blijf licht op je voeten bewegen.' },
  { naam: 'Jumping lunges', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'explosiviteit'], uitleg: 'Spring vanuit een lunge omhoog en wissel in de lucht van been.' },
  { naam: 'Star jumps', soort: 'cardio', materiaal: 'geen', spieren: ['hele lichaam'], uitleg: 'Spring explosief omhoog en spreid je armen en benen als een ster.' },
  { naam: 'Squat thrusts', soort: 'cardio', materiaal: 'geen', spieren: ['hele lichaam'], uitleg: 'Zoals een burpee, maar zonder de sprong omhoog aan het eind.' },
  { naam: 'Tuck jumps', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'explosiviteit'], uitleg: 'Spring omhoog en trek je knieën naar je borst. Land zacht.' },
  { naam: 'Lateral shuffles', soort: 'cardio', materiaal: 'geen', spieren: ['benen', 'wendbaarheid'], uitleg: 'Laag door je knieën en schuifel snel zijwaarts heen en weer.' },

  // ---------- Stretching / cooling-down ----------
  { naam: 'Hamstringstretch', soort: 'cool', materiaal: 'geen', spieren: ['hamstrings'], uitleg: 'Zit met gestrekte benen en reik met een rechte rug naar je tenen.' },
  { naam: 'Quadricepsstretch', soort: 'cool', materiaal: 'geen', spieren: ['bovenbenen'], uitleg: 'Sta op één been en trek je hiel naar je bil. Houd je knieën naast elkaar.' },
  { naam: 'Kindhouding', soort: 'cool', materiaal: 'geen', spieren: ['rug', 'heupen'], uitleg: 'Zit op je hielen, buig voorover en strek je armen voor je uit op de grond.' },
  { naam: 'Kat-koe', soort: 'cool', materiaal: 'geen', spieren: ['rug'], uitleg: 'Op handen en knieën. Wissel rustig tussen een bolle en een holle rug, op het ritme van je ademhaling.' },
  { naam: 'Heupbuigerstretch', soort: 'cool', materiaal: 'geen', spieren: ['heupbuigers'], uitleg: 'Knielend in een lunge. Schuif je heup naar voren tot je rek voelt aan de voorkant van je heup.' },
  { naam: 'Borststretch', soort: 'cool', materiaal: 'geen', spieren: ['borst', 'schouders'], uitleg: 'Zet je arm tegen een deurpost of muur en draai je lichaam er langzaam van weg.' },
  { naam: 'Schouderstretch', soort: 'cool', materiaal: 'geen', spieren: ['schouders'], uitleg: 'Trek je gestrekte arm met je andere hand voor je borst langs.' },
  { naam: 'Tricepsstretch', soort: 'cool', materiaal: 'geen', spieren: ['triceps'], uitleg: 'Arm achter je hoofd. Duw met je andere hand je elleboog zachtjes naar beneden.' },
  { naam: 'Vlinderstretch', soort: 'cool', materiaal: 'geen', spieren: ['binnenkant bovenbeen', 'heupen'], uitleg: 'Zit met je voetzolen tegen elkaar en duw je knieën rustig richting de grond.' },
  { naam: 'Kuitstretch', soort: 'cool', materiaal: 'geen', spieren: ['kuiten'], uitleg: 'Handen tegen de muur, één been naar achteren met je hiel op de grond.' },
  { naam: 'Figure-four stretch', soort: 'cool', materiaal: 'geen', spieren: ['billen', 'heupen'], uitleg: 'Op je rug. Leg je enkel op je andere knie en trek dat been naar je toe.' },
  { naam: 'Cobra', soort: 'cool', materiaal: 'geen', spieren: ['buik', 'onderrug'], uitleg: 'Op je buik. Duw je bovenlichaam omhoog terwijl je heupen op de grond blijven.' },
  { naam: 'Liggende rugdraai', soort: 'cool', materiaal: 'geen', spieren: ['rug', 'heupen'], uitleg: 'Op je rug. Laat je gebogen knieën naar één kant zakken terwijl je schouders blijven liggen.' },

  // ---------- Schaatsimitatie ----------
  { naam: 'Schaatssprongen', soort: 'imitatie', materiaal: 'geen', spieren: ['benen', 'billen', 'balans'], uitleg: 'Spring zijwaarts van het ene op het andere been in een lage schaatshouding. Land zacht en houd de landing even vast.' },
  { naam: 'Schaatszit vasthouden', soort: 'imitatie', materiaal: 'geen', spieren: ['bovenbenen', 'billen', 'rug'], uitleg: 'Knieën ver gebogen, bovenlichaam bijna horizontaal en handen op de rug. Houd deze schaatshouding vast.' },
  { naam: 'Imitatiepassen', soort: 'imitatie', materiaal: 'geen', spieren: ['benen', 'billen'], uitleg: 'Maak in schaatshouding zijwaartse afzetten zoals op het ijs. Haal je been steeds goed bij onder je lichaam.' },
  { naam: 'Imitatie bergop', soort: 'imitatie', materiaal: 'geen', spieren: ['benen', 'conditie'], uitleg: 'Huppel in schaatshouding met armzwaai een helling of trap op. Loop rustig terug.' },
  { naam: 'Glijplank', soort: 'imitatie', materiaal: 'glijplank', spieren: ['benen', 'billen', 'conditie'], uitleg: 'Glijd in schaatshouding heen en weer over de glijplank met een volle zijwaartse afzet.' },
  { naam: 'Afzet met elastiek', soort: 'imitatie', materiaal: 'weerstandsband', spieren: ['billen', 'bovenbenen'], uitleg: 'Elastiek om je heupen, vastgemaakt aan de zijkant. Zet in schaatshouding zijwaarts af tegen de weerstand in.' },
  { naam: 'Pootje-over met elastiek', soort: 'imitatie', materiaal: 'weerstandsband', spieren: ['benen', 'bochttechniek'], uitleg: 'Elastiek om je heupen, vastgemaakt aan je linkerkant. Maak in lage zit pootje-over-passen zoals in de bocht.' },
  { naam: 'Eenbenige schaatszit', soort: 'imitatie', materiaal: 'geen', spieren: ['bovenbenen', 'balans'], uitleg: 'Ga in je schaatszit op één been staan. Het andere been hangt ontspannen naast je standbeen. Halverwege wisselen.' },

  // ---------- Sprongkracht ----------
  { naam: 'Box jumps', soort: 'sprong', materiaal: 'step', spieren: ['benen', 'explosiviteit'], uitleg: 'Spring met twee benen op een stevige step of plateau en stap rustig weer af.' },
  { naam: 'Dieptesprongen', soort: 'sprong', materiaal: 'step', spieren: ['benen', 'reactiekracht'], uitleg: 'Stap van een step af, land op twee benen en spring direct zo hoog mogelijk omhoog.' },
  { naam: 'Hinkelsprongen', soort: 'sprong', materiaal: 'geen', spieren: ['benen', 'kuiten'], uitleg: 'Spring een paar keer achter elkaar op één been naar voren. Wissel van been.' },
  { naam: 'Breedtesprong', soort: 'sprong', materiaal: 'geen', spieren: ['benen', 'billen'], uitleg: 'Spring vanuit stand met twee benen zo ver mogelijk naar voren en land in een diepe zit.' },
  { naam: 'Zijwaartse lijnsprongen', soort: 'sprong', materiaal: 'geen', spieren: ['benen', 'kuiten'], uitleg: 'Spring met beide voeten snel zijwaarts heen en weer over een lijn.' },
  { naam: 'Zijwaartse sprongen voor afstand', soort: 'sprong', materiaal: 'geen', spieren: ['billen', 'balans'], uitleg: 'Spring vanaf één been zo ver mogelijk zijwaarts en land stabiel op het andere been.' },
  { naam: 'Trapsprongen', soort: 'sprong', materiaal: 'geen', spieren: ['benen', 'explosiviteit'], uitleg: 'Spring met twee benen telkens twee treden van een trap op. Loop rustig terug naar beneden.' },
  { naam: 'Sprongen vanuit schaatszit', soort: 'sprong', materiaal: 'geen', spieren: ['benen'], uitleg: 'Begin in je schaatszit en spring explosief omhoog. Land weer in dezelfde lage zit.' },

  // ---------- Balans en stabiliteit ----------
  { naam: 'Eenbenig op balansbord', soort: 'balans', materiaal: 'balansbord', spieren: ['enkels', 'balans'], uitleg: 'Sta in schaatshouding op één been op een balansbord of -kussen en houd je evenwicht.' },
  { naam: 'Eenbenig staan met ogen dicht', soort: 'balans', materiaal: 'geen', spieren: ['enkels', 'balans'], uitleg: 'Sta op één been met een licht gebogen knie en sluit je ogen.' },
  { naam: 'Reiken op één been', soort: 'balans', materiaal: 'geen', spieren: ['billen', 'balans'], uitleg: 'Sta op één been en tik met je andere voet zo ver mogelijk naar voren, opzij en naar achteren.' },
  { naam: 'Pistol squat naar een stoel', soort: 'balans', materiaal: 'stoel', spieren: ['bovenbenen', 'balans'], uitleg: 'Ga op één been langzaam op een stoel zitten en sta weer op zonder je andere voet neer te zetten.' },
  { naam: 'Armzwaai op balansbord', soort: 'balans', materiaal: 'balansbord', spieren: ['balans', 'coördinatie'], uitleg: 'Sta in schaatshouding op een balansbord en maak een rustige armzwaai zonder je evenwicht te verliezen.' },
  { naam: 'Copenhagen plank', soort: 'balans', materiaal: 'stoel', spieren: ['binnenkant bovenbeen', 'core'], uitleg: 'Zijplank met je bovenste voet op een bank. Maakt je liezen sterk, belangrijk bij het schaatsen.' }
  ]
};
