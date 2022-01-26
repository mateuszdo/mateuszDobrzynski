<?php
      $url = file_get_contents("libs/json/countryBorders.geo.json");
      $arr = json_decode($url,true);
    
    $countries = array();
    foreach($arr['features'] as $value)  {
             $name = $value['properties']['name'];
             $iso =  $value['properties']['iso_a2'];
             /*
             $option =  "<option value=$iso>$name</option>";
             $json_option = json_encode($option);
             echo $json_option;
             */
            
            array_push($countries, $name, $iso);
            print_r($countries);
       };
       
?>

            