<?php
    include ('conection.php');
   
        header("Access-Control_Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
        header("Access-Control_Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        header("Access-Control_Allow-Origin: *");

    $email = $_REQUEST['email'];
    $password = $_REQUEST['pwd'];


   // print_r ($email);
   // print_r ($password);

   $data = $conection->query( "SELECT * FROM `user` WHERE `email` = '$email' and `pwd` = '$password' " );

   if( !isset( $data['correo'] ) OR !isset( $data['contrasena'] ) ){

        $respuesta = array(
        'error' => TRUE,
       'mensaje' => 'La informacion enviada no es valida'
        );   
    }

    $rowcount=mysqli_num_rows($data);
 
    if( $rowcount>0 ){

        print_r ($rowcount);  
        
    }else{
        echo "no  ha habido suerte";
    }

?>