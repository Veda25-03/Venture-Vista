<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "payment";

// Connect to database
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$card = $_POST['card'];
$expiry = $_POST['expiry'];
$cvv = $_POST['cvv'];
$amount = $_POST['amount'];

// Insert into DB
$sql = "INSERT INTO payments (fullname, email, card, expiry, cvv, amount, payment_time)
VALUES ('$fullname', '$email', '$card', '$expiry', '$cvv', '$amount', NOW())";

if ($conn->query($sql) === TRUE) {
  echo "
  <div style='
    background-color: #121212;
    color: #00ffcc;
    border: 2px solid #00ffcc;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    margin: 50px auto;
    font-family: Arial, sans-serif;
    text-align: center;
    box-shadow: 0 0 20px #00ffcc;
  '>
    <h2>✅ Payment Successful</h2>
    <p>Thank you, <strong>$fullname</strong>!<br>Your payment of <strong>₹$amount</strong> has been received.</p>
    <a href='payment.html' style='
      display: inline-block;
      margin-top: 20px;
      color: #121212;
      background-color: #00ffcc;
      padding: 10px 20px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
    '>Go Back</a>
  </div>
  ";
} else {
  echo "<p style='color:red; text-align:center;'>❌ Error: " . $sql . "<br>" . $conn->error . "</p>";
}

$conn->close();
?>
