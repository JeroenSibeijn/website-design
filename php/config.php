<?php
/*
  Instellingen voor de formulieren op contact.html.
  Dit bestand staat in de map php/, die niet via de browser te bekijken is (zie php/.htaccess).
  De e-mailadressen hieronder zijn dus niet zichtbaar voor bezoekers.
*/
if (!defined('YVG_FORMULIEREN')) { http_response_code(404); exit; }

return [

    // Waar elk formulier naartoe gaat. Meerdere ontvangers? Gebruik een lijst:
    //   'vraag-schaatsen' => ['afdeling_schaatsen@yvg.nl', 'iemand@yvg.nl'],
    // CONTROLEREN: op yvg.nl waren de ontvangers niet zichtbaar. Deze adressen komen van
    // andere pagina's van yvg.nl; controleer per formulier of het juiste adres is ingevuld.
    'ontvangers' => [
        'vraag-schaatsen'    => 'afdeling_schaatsen@yvg.nl',
        'vraag-lidmaatschap' => 'ledenadministratie@yvg.nl',
        'vraag-overig'       => 'info@yvg.nl',
        'proef-jeugd'        => 'jeugdcommissie@yvg.nl',
        'proef-recreant'     => 'afdeling_schaatsen@yvg.nl',
        'proef-wedstrijd'    => 'afdeling_schaatsen@yvg.nl',
        'vraag-inline'       => 'zomertraining@yvg.nl',
        'vraag-financieel'   => 'penningmeester@yvg.nl',
        'vraag-website'      => 'communicatie@yvg.nl',
    ],

    // Afzender van de mails. Gebruik een adres op het domein waar de website draait
    // (bijvoorbeeld website@yvg.nl), anders komen de mails vaak in de spam terecht.
    // Op "Antwoorden" klikken stuurt je antwoord gewoon naar de invuller.
    'afzender'      => 'website@yvg.nl',
    'afzender_naam' => 'Website YVG',

    // Sommige hosting vraagt om het afzenderadres ook als "envelope sender" mee te geven.
    // Komen er geen mails aan? Zet hier dan hetzelfde adres als bij 'afzender'.
    'envelope_afzender' => '',

    // Komt voor het onderwerp van elke mail, zodat je de mails makkelijk herkent.
    'onderwerp_voorvoegsel' => '[Website YVG]',

    // Adres dat bezoekers te zien krijgen als het versturen mislukt.
    'reserve_email' => 'info@yvg.nl',

    // Pagina met de formulieren (voor de link "terug" als JavaScript uit staat).
    'terug_url' => 'contact.html',

    // Bescherming tegen spam: maximaal zoveel berichten per 10 minuten vanaf hetzelfde internetadres.
    'max_per_10_min' => 5,

    // Map voor tijdelijke gegevens (spambescherming en testmodus). Leeg = de tijdelijke map van de server.
    'opslagmap' => '',

    // Testmodus: true = mails NIET versturen, maar opslaan in formulieren-test.log in de opslagmap.
    // Handig om alles te testen voordat de site live gaat. Zet daarna terug op false.
    'testmodus' => false,
];
