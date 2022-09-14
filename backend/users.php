<?php

include("connection.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers: Origin,Content_Type,Accept,Authorization,X-Request-With");

$query = $mysqli->prepare("SELECT name,email,phone,message  FROM users");
$query->execute();
$array = $query->get_result();

$response = [];

if($array-> num_rows > 0){
    while($row = $array->fetch_assoc()){
        $response[] = $row;
        // echo "<tr><td>" . $row["name"] . "</td><td>" . $row["email"] ."</td><td>" . $row["phone"] ."</td><td>" . $row["message"] . </td></tr>";
    }
    echo "</table>";
}else{
    echo "0 result";
}

$json = json_encode($response);
echo $json;


?>