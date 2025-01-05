<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "2034"; // Set your database password here
$dbname = "credit_card_management_system"; // Change this to your actual database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
