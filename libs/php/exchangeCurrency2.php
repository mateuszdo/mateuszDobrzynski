
<?php

  $from = $_REQUEST['from'];
  $to = $_REQUEST['to'];
  $amount = (int)$_REQUEST['amount'];

   $url = 'https://v6.exchangerate-api.com/v6/d915be425c3f87ed70d2968b/pair/'.$from.'/'.$to.'/'.$amount;
      

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    
	$result = curl_exec($ch);

	curl_close($ch);
	print_r($result);







?>