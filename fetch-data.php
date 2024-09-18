<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bangladesh";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if($_POST['division']){
$division = $_POST['division'];
$sql = "SELECT * FROM bd where division = '$division'";
$result = $conn->query($sql);

// Convert result to an array
$data = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo $row['division'];
  }
}
}



?>
