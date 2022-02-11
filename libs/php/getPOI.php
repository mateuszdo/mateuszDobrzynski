   <?php

    $lat = (float)$_REQUEST['lat'];
    $lon = (float)$_REQUEST['lon'];


	//$url ='https://api.geoapify.com/v1/geocode/reverse?lat='.$lat.'&lon='.$lon.'&apiKey=a9b8cfee04524d8e842508ebe6ccedcb';
    $url = 'https://api.geoapify.com/v2/places?categories=catering.pub&circle:'.$lon.','.$lat.',50000&bias=proximity:'.$lon.','.$lat.'&limit=50&apiKey=a9b8cfee04524d8e842508ebe6ccedcb';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
    echo $result;

    ?>