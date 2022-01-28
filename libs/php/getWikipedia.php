<?php

	$url = 'http://api.geonames.org/findNearbyWikipedia?lat='.$_REQUEST['lat'].'&lng='.$_REQUEST['lng'].'&username=mateuszdo';
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	echo $result
  
    
?>