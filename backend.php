<?php
    $name = $_POST['fullname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['topic'];

    $email_from = 'dhruvindave60@gmail.com';

    $email_subject = 'Discussion about me with client.';

    $email_body = "User Name: $name. \n".
                "User Email: $visitor_email. \n".
                "User Message: $topic . \n";
    
     $to = "dhruvindave60@gmail.com";
     $headers = "From: $email_from \r\n";
     $headers .= "Reply-To: _visitor_email \r\n";
     mail($to,$email_subject,$email_body,$headers);

     header("Location: index.html");


?>