<?php
    $conection = new mysqli( "localhost", "root", "", "satcontrol" );
    if( $conection->connect_error ) die( 'No se puede conectar con la base de datos' );
?>