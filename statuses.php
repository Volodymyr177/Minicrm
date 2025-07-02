<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lead Statuses</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav>
    <a href="index.php">Form</a> |
    <a href="statuses.php">Statuses</a>
</nav>

<h2>Lead Statuses</h2>

<label for="dateFrom">Date from:</label>
<input type="datetime-local" id="dateFrom">

<label for="dateTo">Date to:</label>
<input type="datetime-local" id="dateTo">

<button onclick="loadStatuses()">Load Statuses</button>

<div id="statusMsg" style="color: red;"></div>

<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Status</th>
        <th>FTD</th>
    </tr>
    </thead>
    <tbody id="statusBody"></tbody>
</table>

<script src="js/statuses.js"></script>
</body>
</html>
