<?php
/*
  De velden van elk formulier op contact.html, zodat de server ze kan controleren.

  Voeg je in contact.html een veld toe of verander je de naam (name="...")?
  Pas het dan hier ook aan. De keuzes van keuzerondjes (bijvoorbeeld trainingstijden)
  staan alleen in contact.html; die hoef je hier niet bij te werken.

  Per veld:
    label     – naam van het veld in de e-mail
    type      – text | email | tel | postcode | datum | keuze | tekstvak
    verplicht – true als het veld ingevuld moet worden
    max       – maximaal aantal tekens
*/
if (!defined('YVG_FORMULIEREN')) { http_response_code(404); exit; }

$vraagVelden = [
    'voornaam'   => ['label' => 'Voornaam',       'type' => 'text',    'verplicht' => true,  'max' => 100],
    'achternaam' => ['label' => 'Achternaam',     'type' => 'text',    'verplicht' => true,  'max' => 100],
    'telefoon'   => ['label' => 'Telefoonnummer', 'type' => 'tel',     'verplicht' => true,  'max' => 20],
    'email'      => ['label' => 'E-mailadres',    'type' => 'email',   'verplicht' => true,  'max' => 200],
    'onderwerp'  => ['label' => 'Onderwerp',      'type' => 'text',    'verplicht' => true,  'max' => 200],
    'bericht'    => ['label' => 'Bericht',        'type' => 'tekstvak', 'verplicht' => true, 'max' => 4000],
];

$proefBasis = [
    'naam'          => ['label' => 'Naam',           'type' => 'text',  'verplicht' => true, 'max' => 150],
    'geboortedatum' => ['label' => 'Geboortedatum',  'type' => 'datum', 'verplicht' => true, 'max' => 10],
];
$proefAdres = [
    'adres'      => ['label' => 'Straat en huisnummer', 'type' => 'text',     'verplicht' => true, 'max' => 150],
    'postcode'   => ['label' => 'Postcode',             'type' => 'postcode', 'verplicht' => true, 'max' => 10],
];
$proefContact = [
    'woonplaats' => ['label' => 'Woonplaats',     'type' => 'text',  'verplicht' => true, 'max' => 100],
    'telefoon'   => ['label' => 'Telefoonnummer', 'type' => 'tel',   'verplicht' => true, 'max' => 20],
    'email'      => ['label' => 'E-mailadres',    'type' => 'email', 'verplicht' => true, 'max' => 200],
];
$opmerkingen = [
    'opmerkingen' => ['label' => 'Aanvullingen of opmerkingen', 'type' => 'tekstvak', 'verplicht' => false, 'max' => 4000],
];

$bedanktVraag = 'Bedankt! Je bericht is verstuurd. We proberen alle e-mails binnen drie dagen te beantwoorden.';
$bedanktProef = 'Bedankt voor je aanvraag! We nemen zo snel mogelijk contact met je op over de proeftraining.';

return [
    'vraag-schaatsen' => [
        'titel' => 'Vraag over schaatsen bij YVG', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
    'vraag-lidmaatschap' => [
        'titel' => 'Vraag over lidmaatschap', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
    'vraag-overig' => [
        'titel' => 'Overige vraag of opmerking', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
    'proef-jeugd' => [
        'titel' => 'Aanvraag proeftraining jeugd',
        'velden' => $proefBasis + $proefAdres + $proefContact + [
            'moment' => ['label' => 'Gewenste proeftraining', 'type' => 'keuze', 'verplicht' => true, 'max' => 200],
        ] + $opmerkingen,
        'onderwerp_veld' => 'naam', 'bedankt' => $bedanktProef,
    ],
    'proef-recreant' => [
        'titel' => 'Aanvraag proeftraining recreant',
        'velden' => $proefBasis + $proefContact + [
            'moment' => ['label' => 'Gewenste proeftraining', 'type' => 'keuze', 'verplicht' => true, 'max' => 200],
        ] + $opmerkingen,
        'onderwerp_veld' => 'naam', 'bedankt' => $bedanktProef,
    ],
    'proef-wedstrijd' => [
        'titel' => 'Aanvraag proeftraining wedstrijdrijder',
        'velden' => $proefBasis + $proefAdres + $proefContact + [
            'soort'  => ['label' => 'Soort proeftraining',    'type' => 'keuze', 'verplicht' => true, 'max' => 200],
            'moment' => ['label' => 'Gewenste proeftraining', 'type' => 'keuze', 'verplicht' => true, 'max' => 200],
        ] + $opmerkingen,
        'onderwerp_veld' => 'naam', 'bedankt' => $bedanktProef,
    ],
    'vraag-inline' => [
        'titel' => 'Vraag over inline-skaten', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
    'vraag-financieel' => [
        'titel' => 'Vraag aan de financiële administratie', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
    'vraag-website' => [
        'titel' => 'Vraag of opmerking over de website', 'velden' => $vraagVelden,
        'onderwerp_veld' => 'onderwerp', 'bedankt' => $bedanktVraag,
    ],
];
