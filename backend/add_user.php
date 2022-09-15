<?php

include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


$name = isset($_POST["name"]);
$email = isset($_POST["email"]);
$phone = isset($_POST["phone"]);
$message = isset($_POST["message"]);


$query = $mysqli->prepare("INSERT INTO users(name, email,phone,message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssis", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>