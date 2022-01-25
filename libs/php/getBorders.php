<?php
    /*
    $url='libs/json/countryBorders.geo.json';
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
    echo $result
    */
    $file = file_get_contents("libs/json/countryBorders.geo.json");
    
    //print_r($json_decoded);
    //echo $json_decoded->properties[0];
    echo $file;
?>  