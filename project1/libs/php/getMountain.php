 <?php

    $code = $_REQUEST['iso'];
    if($code === 'gb') {
        $code = 'uk';
    }
    $url = "https://www.triposo.com/api/20220104/poi.json?tag_labels=poitype-Mountain&countrycode=".$code."&fields=name,images,coordinates,snippet&account=GTE06Y8P&token=nyggdwetofqstixix611i3t3j9er2sjc";
    //$url = 'https://www.triposo.com/api/20220104/location.json?countrycode='.$code.'&tag_labels=beach,mountain&fields=attribution,coordinates,images,name,snippetaccount=$triposo$&token=nyggdwetofqstixix611i3t3j9er2sjc';
	//$url ='https://api.geoapify.com/v1/geocode/reverse?lat='.$lat.'&lon='.$lon.'&apiKey=a9b8cfee04524d8e842508ebe6ccedcb';
    //$url = $url = "https://www.triposo.com/api/20210317/$api.json?$type" . "countrycode=$code&fields=attribution,coordinates,images,name,snippet&account=$triposo&token=nyggdwetofqstixix611i3t3j9er2sjc";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
    echo $result;
    
    ?>