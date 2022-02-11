<?php

     $q = strval(strtolower($_REQUEST['country']));
	 $url = 'https://newsdata.io/api/1/news?apikey=pub_4481b2d9eaf4070c0495c154fab8fbea92a1&country='.$q;
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	echo $result
?>
