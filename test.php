<?php

echo "test1";

$json = file_get_contents("http://localhost:8080/com.sparc.webservice/ws/sparc/getDeviceList", true); //getting the file content
$decode = json_decode($json, true); //getting the file content as array
 
 echo "test2";
 echo "$json";
print_r($decode);

?>