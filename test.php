<?php

    $userName = $_POST[username];
    $password = $_POST[password];
    echo(file_get_contents('http://localhost:8080/com.sparc.webservice/ws/sparc/auth?username='.$userName.'&password='.$password));

?>
