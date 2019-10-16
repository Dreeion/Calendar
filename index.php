<?php
/**
 * Created by PhpStorm.
 * User: camille
 * Date: 16/10/2019
 * Time: 19:11
 */
$host = 'mysql-dreion.alwaysdata.net';
$port = 3306;
$database = 'dreion_calendar';
$login = 'dreion';
$password = 'PV3374ei..';

$nom=(isset($_POST["nom"])) ? $_POST["nom"]:false;
$prenom=(isset($_POST["prenom"])) ? $_POST["prenom"]:false;
$id_utilisateur=(isset($_POST["utilisateur"])) ? $_POST["utilisateur"]:false;
$telephone=(isset($_POST["telephone"])) ? $_POST["telephone"]:false;
$mail=(isset($_POST["mail"])) ? $_POST["mail"]:false;
$annee=(isset($_POST["annee"])) ? $_POST["annee"]:false;
$mois=(isset($_POST["mois"])) ? $_POST["mois"]:false;
$jour=(isset($_POST["jour"])) ? $_POST["jour"]:false;
$horaire=(isset($_POST["horaire"])) ? $_POST["horaire"]:false;

$pdo = new PDO("mysql:host=$host;port=$port;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$stm = $pdo->prepare("INSERT INTO rdv (id_utilisateur, nom, prenom, telephone, mail, annee, mois, jour, horaire) VALUES (:id_utilisateur, :nom, :prenom, :telephone, :mail, :annee, :mois, :jour, :horaire)");
$stm->bindParam(':id_utilisateur', $id_utilisateur, PDO::PARAM_INT);
$stm->bindParam(':nom', $nom, PDO::PARAM_STR);
$stm->bindParam(':prenom', $prenom, PDO::PARAM_STR);
$stm->bindParam(':telephone', $telephone, PDO::PARAM_STR);
$stm->bindParam(':mail', $mail, PDO::PARAM_STR);
$stm->bindParam(':annee', $annee, PDO::PARAM_STR);
$stm->bindParam(':mois', $mois, PDO::PARAM_STR);
$stm->bindParam(':jour', $jour, PDO::PARAM_STR);
$stm->bindParam(':horaire', $horaire, PDO::PARAM_STR);
$stm->execute();