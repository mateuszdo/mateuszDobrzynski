<?php

   $code = $_REQUEST['code'];
    if($code === 'gb') {
        $code = 'uk';
    }

   $code = $_REQUEST['code'];
   $key = 'ac87599da9024a12a72bff0532cd1e25';  
   $url = 'https://newsapi.org/v2/top-headlines?country=' . $code . '&apiKey=' . $key;
 

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	echo $result



?>