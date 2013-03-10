<?php

$json = file_get_contents("http://localhost:8080/com.sparc.webservice/ws/sparc/getDeviceList", true); //getting the file content
$decode = json_decode($json, true); //getting the file content as array
 
 echo "$json";

?>
        <script>
            //function called when device page is shown
            $('#devices').live('pageshow',function(event){
                alert(2);
                //code to call webservice
                $.ajax({
                  type: 'GET',
                  url: "http://localhost:8080/com.sparc.webservice/ws/sparc/getDeviceList?callback=getDeviceListCallback",
                  async: false,
                  contentType: "application/json",
                  dataType: 'jsonp'
                });
            });
            //callback function specified in url above this is where you convert teh JSON into html
            function getDeviceListCallback(response)
            {
                //this displays the response in the chrome console, this will be replaced with code to convert
                // the json into html
                try // try to output this to the javascript console
                {
                    console.log(response);
                }
                catch(an_exception) // alert for the users that don't have a javascript console
                {
                    alert(an_exception);
                }
            }
      </script> 