<?php
    $url = 'api.openweathermap.org/data/2.5/onecall?units=metric&lat='.$_REQUEST['lat'].'&lon='.$_REQUEST['lon'].'&exclude=current,minutely,hourly,alerts&appid=c872ee2bf5d26793a6e75aa009fc4f0d';
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	echo $result;
    
?>