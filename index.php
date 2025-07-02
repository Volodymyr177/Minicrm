<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Send Lead</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<nav>
    <a href="index.php">Form</a> |
    <a href="statuses.php">Statuses</a>
</nav>

<h1>Lead Form</h1>
<form id="leadForm">
    <label>First Name: <input type="text" name="firstName" required></label><br>
    <label>Last Name: <input type="text" name="lastName" required></label><br>
    <label>Phone: <input type="text" name="phone" required></label><br>
    <label>Email: <input type="email" name="email" required></label><br>
    <button type="submit">Send</button>
</form>

<p id="responseMsg"></p>

<script src="js/lead.js"></script>
</body>
</html>

