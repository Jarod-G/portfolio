<?php
$message = $_POST["message"];
$email = $_POST["email"];
$name = $_POST["name"];
if($_POST["Envoyer un message"]) {
    mail("ginjarod@gmail.com", "Here is the subject line", $message. "From: $name $email ");
}
?>