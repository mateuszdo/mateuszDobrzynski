<?php
    $url = file_get_contents("../json/countryBorders.geo.json");
    $decode = json_decode($url,true);
    $request_name = $_REQUEST['iso_a2'];
    

    foreach($decode['features'] as $country_data)  {
       if($country_data["properties"]["iso_a2"] == $request_name) {
            //$country_data;
           $country_coordinates =  $country_data["geometry"];
        }
    } 
      
    $output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['data'] = $country_coordinates;
	
	header('Content-Type: application/json; charset=UTF-8');
      
    echo json_encode($output);

    ?>

