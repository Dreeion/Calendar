<?php
$host = 'mysql-dreion.alwaysdata.net';
$port = 3306;
$database = 'dreion_calendar';
$login = 'dreion';
$password = 'PV3374ei..';

$pdo1 = new PDO("mysql:host=$host;port=$port;dbname=$database", $login, $password);
$pdo1->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$stm1 = $pdo1->query("SELECT jour, mois, annee, horaire FROM rdv");
while ($row = $stm1->fetch()) {
    $jour = $row['jour'];
    $mois = $row['mois'];
    $annee = $row['annee'];
    $horaire = $row['horaire'];
    var_dump($horaire);
}
