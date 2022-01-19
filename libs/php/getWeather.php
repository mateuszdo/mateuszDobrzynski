    <?php
    

	$url = 'http://api.geonames.org/weatherIcaoJSON?formatted=true&ICAO=EGKK' . $_REQUEST['getStation'] . '&username=mateuszdo&style=full';
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	
	$resp = curl_exec($ch);

    if($e = curl_error($ch)) {
		echo $e;
	}
	else {
		$decoded = json_decode($resp, true);
        print_r($decoded);
        
	}
	
	curl_close($ch);
    ?>