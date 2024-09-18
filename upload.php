<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bangladesh";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Collect form database

$division = $_POST['division'];
$district = $_POST['district'];
$upazila = $_POST['upazila'];
$union = $_POST['union'];
echo $union;



// Prepare SQL query
$sql = "INSERT INTO bd (division, district, upazila, up) VALUES ('$division', '$district','$upazila', '$union')";

// Execute SQL query
if (mysqli_query($conn, $sql)) {
  echo "Data uploaded successfully.";
} else {
  echo "Error uploading data: " . mysqli_error($conn);
}

// Close database connection

?>
