<?php
/*
  Verstuurt de formulieren van contact.html als e-mail.

  - Ontvangers en afzender:   php/config.php
  - Velden per formulier:     php/formulieren.php
  - Werkt met PHP 7.4 of nieuwer en de standaard mail()-functie van de hosting.

  Het formulier wordt met JavaScript verstuurd (antwoord in JSON). Staat JavaScript uit,
  dan krijgt de bezoeker een eenvoudige pagina met het resultaat en een link terug.
*/
declare(strict_types=1);

define('YVG_FORMULIEREN', true);
$config = require __DIR__ . '/php/config.php';
$forms  = require __DIR__ . '/php/formulieren.php';

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

const STANDAARD_BEDANKT = 'Bedankt! Je bericht is verstuurd.';

/* ---------- Antwoord naar de browser ---------- */

function respond(bool $ok, string $message, array $errors = [], int $status = 200): void
{
    global $wantsJson, $config;
    http_response_code($status);

    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message, 'errors' => (object) $errors], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Zonder JavaScript: eenvoudige pagina met het resultaat
    header('Content-Type: text/html; charset=utf-8');
    $h = fn(string $s): string => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
    $title = $ok ? 'Bedankt!' : 'Versturen niet gelukt';
    $list = '';
    foreach ($errors as $e) {
        $list .= '<li>' . $h((string) $e) . '</li>';
    }
    $back = $h((string) ($config['terug_url'] ?? 'contact.html'));
    echo '<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8">'
        . '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        . '<title>' . $h($title) . ' – IJsvereniging Groningen</title>'
        . '<link rel="stylesheet" href="css/style.css"></head><body>'
        . '<main class="container" style="padding:48px 16px 64px"><h1>' . $h($title) . '</h1>'
        . '<p>' . $h($message) . '</p>' . ($list !== '' ? '<ul>' . $list . '</ul>' : '')
        . '<p><a class="button" href="' . $back . '">' . ($ok ? 'Terug naar de website' : 'Terug naar het formulier') . '</a></p>'
        . '</main></body></html>';
    exit;
}

/* ---------- Hulpfuncties ---------- */

function textLength(string $s): int
{
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen($s);
}

// Haal onzichtbare en ongeldige tekens weg; alleen een tekstvak mag regels bevatten
function cleanValue($value, bool $multiline): string
{
    if (!is_string($value)) {
        return '';
    }
    if (function_exists('mb_check_encoding') && !mb_check_encoding($value, 'UTF-8')) {
        return '';
    }
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace($multiline ? '/[^\P{C}\n\t]/u' : '/\p{C}/u', $multiline ? '' : ' ', $value);
    return trim((string) $value);
}

// Geeft de datum terug als dd-mm-jjjj, of null als hij niet klopt.
// Accepteert jjjj-mm-dd (datumveld in de browser) en dd-mm-jjjj (handmatig getypt).
function normalizeDate(string $value): ?string
{
    if (preg_match('/^(\d{4})-(\d{1,2})-(\d{1,2})$/', $value, $m)) {
        [$y, $mo, $d] = [(int) $m[1], (int) $m[2], (int) $m[3]];
    } elseif (preg_match('/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/', $value, $m)) {
        [$d, $mo, $y] = [(int) $m[1], (int) $m[2], (int) $m[3]];
    } else {
        return null;
    }
    if (!checkdate($mo, $d, $y) || $y < 1900) {
        return null;
    }
    if (sprintf('%04d-%02d-%02d', $y, $mo, $d) > date('Y-m-d')) {
        return null; // geboortedatum in de toekomst
    }
    return sprintf('%02d-%02d-%04d', $d, $mo, $y);
}

function encodeHeader(string $text): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $text)) {
        return $text;
    }
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($text, 'UTF-8', 'B', "\r\n");
    }
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

function formatAddress(string $email, string $name): string
{
    $name = trim(str_replace(['"', '\\', "\r", "\n"], '', $name));
    return $name === '' ? $email : encodeHeader($name) . ' <' . $email . '>';
}

function storageDir(array $config): ?string
{
    $base = trim((string) ($config['opslagmap'] ?? ''));
    $dir = rtrim($base !== '' ? $base : sys_get_temp_dir(), '/\\') . DIRECTORY_SEPARATOR . 'yvg-formulieren';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
        return null;
    }
    return $dir;
}

// Maximaal X berichten per 10 minuten per internetadres. Het adres zelf wordt niet bewaard, alleen een hash.
function isRateLimited(array $config): bool
{
    $max = (int) ($config['max_per_10_min'] ?? 5);
    $dir = storageDir($config);
    if ($max <= 0 || $dir === null) {
        return false;
    }
    $now = time();

    // Af en toe oude bestanden opruimen
    if (random_int(1, 50) === 1) {
        foreach (glob($dir . DIRECTORY_SEPARATOR . 'rl-*.json') ?: [] as $old) {
            if (@filemtime($old) < $now - 86400) {
                @unlink($old);
            }
        }
    }

    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'onbekend');
    $file = $dir . DIRECTORY_SEPARATOR . 'rl-' . hash('sha256', $ip . '|' . __DIR__) . '.json';
    $fp = @fopen($file, 'c+');
    if ($fp === false) {
        return false;
    }
    flock($fp, LOCK_EX);
    $times = json_decode((string) stream_get_contents($fp), true);
    $times = is_array($times) ? array_values(array_filter($times, fn($t) => is_int($t) && $t > $now - 600)) : [];
    $limited = count($times) >= $max;
    if (!$limited) {
        $times[] = $now;
    }
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) json_encode($times));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    return $limited;
}

/* ---------- Verzoek controleren ---------- */

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Dit adres is alleen bedoeld voor het versturen van de formulieren op de contactpagina.', [], 405);
}

$formId = is_string($_POST['formulier'] ?? null) ? $_POST['formulier'] : '';
if (!isset($forms[$formId])) {
    respond(false, 'Dit formulier is onbekend. Vernieuw de pagina en probeer het opnieuw.', [], 400);
}
$form = $forms[$formId];
$thanks = (string) ($form['bedankt'] ?? STANDAARD_BEDANKT);

// Spam: het verborgen veld is ingevuld, of het formulier is binnen 3 seconden verstuurd.
// Doe dan alsof het gelukt is, maar verstuur niets.
$honeypot = cleanValue($_POST['website'] ?? '', false);
$fillSeconds = isset($_POST['invultijd']) && is_numeric($_POST['invultijd']) ? (int) $_POST['invultijd'] : null;
if ($honeypot !== '' || ($fillSeconds !== null && $fillSeconds < 3)) {
    respond(true, $thanks);
}

// Velden controleren
$values = [];
$errors = [];
foreach ($form['velden'] as $name => $field) {
    $type = $field['type'];
    $value = cleanValue($_POST[$name] ?? '', $type === 'tekstvak');
    $label = $field['label'];

    if ($value === '') {
        if (!empty($field['verplicht'])) {
            $errors[$name] = $type === 'keuze' ? "$label: maak een keuze." : "$label: vul dit veld in.";
        }
        $values[$name] = '';
        continue;
    }
    if (textLength($value) > (int) $field['max']) {
        $errors[$name] = "$label: dit is te lang (maximaal {$field['max']} tekens).";
        continue;
    }
    switch ($type) {
        case 'email':
            if (filter_var($value, FILTER_VALIDATE_EMAIL) === false) {
                $errors[$name] = "$label: vul een geldig e-mailadres in.";
            }
            break;
        case 'tel':
            if (!preg_match('/^\+?[0-9 ()\-]{6,20}$/', $value)) {
                $errors[$name] = "$label: vul een geldig telefoonnummer in.";
            }
            break;
        case 'postcode':
            if (!preg_match('/^[0-9A-Za-z][0-9A-Za-z \-]{2,9}$/', $value)) {
                $errors[$name] = "$label: vul een geldige postcode in.";
            }
            $value = strtoupper($value);
            break;
        case 'datum':
            $date = normalizeDate($value);
            if ($date === null) {
                $errors[$name] = "$label: vul een geldige datum in.";
            } else {
                $value = $date;
            }
            break;
    }
    $values[$name] = $value;
}

if ($errors) {
    respond(false, 'Niet alle velden zijn goed ingevuld. Controleer de gemarkeerde velden.', $errors, 422);
}

// Alleen goed ingevulde berichten tellen mee voor de spambeperking
if (isRateLimited($config)) {
    respond(false, 'Je hebt in korte tijd veel berichten verstuurd. Wacht een paar minuten en probeer het dan opnieuw.', [], 429);
}

/* ---------- E-mail opbouwen ---------- */

$recipients = array_filter(
    (array) ($config['ontvangers'][$formId] ?? []),
    fn($r) => is_string($r) && filter_var($r, FILTER_VALIDATE_EMAIL) !== false
);
$fallback = (string) ($config['reserve_email'] ?? '');
if (!$recipients) {
    respond(false, 'Dit formulier is nog niet ingesteld.' . ($fallback !== '' ? " Mail je vraag naar $fallback." : ''), [], 500);
}

$senderName = trim(($values['voornaam'] ?? '') . ' ' . ($values['achternaam'] ?? '')) ?: ($values['naam'] ?? '');
$subjectExtra = $values[$form['onderwerp_veld'] ?? ''] ?? '';
if (textLength($subjectExtra) > 120) {
    $subjectExtra = (function_exists('mb_substr') ? mb_substr($subjectExtra, 0, 117, 'UTF-8') : substr($subjectExtra, 0, 117)) . '...';
}
$subject = trim(($config['onderwerp_voorvoegsel'] ?? '') . ' ' . $form['titel'] . ($subjectExtra !== '' ? ': ' . $subjectExtra : ''));

$lines = ['Nieuw bericht via het formulier "' . $form['titel'] . '" op de website.', ''];
foreach ($form['velden'] as $name => $field) {
    $value = $values[$name] ?? '';
    if ($field['type'] === 'tekstvak') {
        $lines[] = '';
        $lines[] = $field['label'] . ':';
        $lines[] = $value !== '' ? $value : '(niet ingevuld)';
    } else {
        $lines[] = $field['label'] . ': ' . ($value !== '' ? $value : '-');
    }
}
$lines[] = '';
$lines[] = '--';
$lines[] = 'Verzonden op ' . date('d-m-Y \o\m H:i') . ' via ' . ($_SERVER['HTTP_HOST'] ?? 'de website') . '.';
$lines[] = 'Klik op "Antwoorden" om ' . ($senderName !== '' ? $senderName : 'de afzender') . ' te mailen (' . $values['email'] . ').';
$body = implode("\n", $lines);

$fromEmail = (string) ($config['afzender'] ?? '');
if (filter_var($fromEmail, FILTER_VALIDATE_EMAIL) === false) {
    respond(false, 'Het afzenderadres van de website is niet goed ingesteld.' . ($fallback !== '' ? " Mail je vraag naar $fallback." : ''), [], 500);
}

$headers = [
    'From: ' . formatAddress($fromEmail, (string) ($config['afzender_naam'] ?? '')),
    'Reply-To: ' . formatAddress($values['email'], $senderName),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: quoted-printable',
    'X-Mailer: YVG website',
];
$to = implode(', ', $recipients);
$encodedSubject = encodeHeader($subject);
$encodedBody = quoted_printable_encode(str_replace("\n", "\r\n", $body));

/* ---------- Versturen (of opslaan in testmodus) ---------- */

if (!empty($config['testmodus'])) {
    $dir = storageDir($config);
    $entry = str_repeat('=', 70) . "\nAan: $to\nOnderwerp: $subject\n" . implode("\n", $headers) . "\n\n$body\n\n";
    if ($dir === null || @file_put_contents($dir . DIRECTORY_SEPARATOR . 'formulieren-test.log', $entry, FILE_APPEND | LOCK_EX) === false) {
        respond(false, 'Testmodus: het logbestand kon niet worden opgeslagen.', [], 500);
    }
    respond(true, $thanks . ' (Testmodus: er is geen e-mail verstuurd.)');
}

$envelope = (string) ($config['envelope_afzender'] ?? '');
$params = filter_var($envelope, FILTER_VALIDATE_EMAIL) !== false ? '-f' . $envelope : '';

$sent = $params !== ''
    ? @mail($to, $encodedSubject, $encodedBody, implode("\r\n", $headers), $params)
    : @mail($to, $encodedSubject, $encodedBody, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'Het versturen is niet gelukt. Probeer het later opnieuw' . ($fallback !== '' ? ", of mail je vraag naar $fallback." : '.'), [], 500);
}

respond(true, $thanks);
