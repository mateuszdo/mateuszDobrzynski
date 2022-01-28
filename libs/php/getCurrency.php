<?php

// set API Endpoint and API key 


// Initialize CURL:
$ch = curl_init('http://data.fixer.io/api/symbols?access_key=e7ed0484e38fa657de0d06e5d47b4d3f');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$symbols = json_decode($json, true);

// Access the exchange rate values, e.g. GBP:
echo $symbols;
print_r($symbols);
?>