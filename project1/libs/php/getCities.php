<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=".$_REQUEST['code']."%2C&type=CITY",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: spott.p.rapidapi.com",
		"x-rapidapi-key: 0ea243a8bfmshef4edc2fd3ac44bp1da0c3jsn5afb33d93fdb"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	print_r($response);
}






?>