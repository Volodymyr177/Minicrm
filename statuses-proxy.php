<?php
// statuses-proxy.php

$endpoint = 'https://crm.belmar.pro/api/v1/getstatuses';

$headers = [
    'Content-Type: application/json',
    'token: ba67df6a-a17c-476f-8e95-bcdb75ed3958',
];

$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents("php://input"));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if(curl_errno($ch)){
    echo json_encode(['error' => curl_error($ch)]);
} else {
    http_response_code($httpcode);
    echo $response;
}
curl_close($ch);

