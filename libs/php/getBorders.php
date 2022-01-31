<?php
    $url = file_get_contents("../json/countryBorders.geo.json");
    $decode = json_decode($url,true);
    $request_name = $_REQUEST['name'];
    $country_names_and_iso_codes = [];

    foreach($decode['features'] as $country_data)  {
       if($country_data["properties"]["name"] == $request_name) {
           $country_coordinates =  $country_data["geometry"]["coordinates"];
        }
    } 
      
    $output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['data'] = $country_coordinates;
	
	header('Content-Type: application/json; charset=UTF-8');
      
    echo json_encode($output);

    ?>

