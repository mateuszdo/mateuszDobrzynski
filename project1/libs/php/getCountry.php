<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://restcountries.com/v2/alpha/".$_REQUEST['code']."?fullText=true",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: countries33.p.rapidapi.com",
		"x-rapidapi-key: 4cf284d3d9mshb26832e2ad9f655p143164jsn49df42bf940e"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}

?>