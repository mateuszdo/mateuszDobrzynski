<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Task</title>
</head>
<body>
    <div class="header">
        <h1 class="heading">Using PHP to get data from the API</h1>
    </div>
    <div class="main">
        <table class="main-table">
            <thead>
                <tr>
                    <th colspan="1">API name</th>
                    <th colspan="3">API description</th>
                </tr>
            </thead>   
            <tbody>
                <tr>
                    <td>1.Weather checker</td>
                    <td colspan="3">
                        <form action="" method="POST">
                            <input type="text" name="userinput">
                            <input type="submit" name="Submit">
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>2.name</td>
                    <td colspan="3">
                        <form action="" method="POST">
                            <input type="text" name="userinput">
                            <input type="submit" name="Submit">
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>3.name</td>
                    <td colspan="3">
                        <form action="" method="POST">
                            <input type="text" name="userinput">
                            <input type="submit" name="Submit">
                        </form>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">
                        <?php
    $ch = curl_init();

	$url = "http://api.geonames.org/weatherIcaoJSON?ICAO=LSZH&username=mateuszdo";
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	
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
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div id="preloader"></div>

</body>
</html>