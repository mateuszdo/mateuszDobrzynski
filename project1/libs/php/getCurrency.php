<?php

//$endpoint = 'symbols';
//$access_key = 'e7ed0484e38fa657de0d06e5d47b4d3f';

   $url='http://data.fixer.io/api/symbols?access_key=e7ed0484e38fa657de0d06e5d47b4d3f';
   // $url='https://free.currconv.com/api/v7/currencies?apiKey=dedfb71e62583a88c9db';    

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	echo $result



?>