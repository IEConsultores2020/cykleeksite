<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

echo "Pass Use:";

// Load Composer's autoloader (if using Composer)
// require 'vendor/autoload.php';

// Include PHPMailer library files (if manually downloaded)
// require '../../PHPMailer/src/Exception.php';
// require '../../PHPMailer/src/PHPMailer.php';
// require '../../to/PHPMailer/src/SMTP.php';

console.log(`Created PHPMailer...`);

// Get form inputs
// $name = $_POST['name'];
// $email = $_POST['email'];
// $subject = "From Joinus cykleek site";
// $message = $_POST['message'];
// $tel = $_POST['tel'];

// // Create a new PHPMailer instance
// $mail = new PHPMailer(true);

// try {
//     //Server settings
//     $mail->isSMTP();                                            // Send using SMTP
//     $mail->Host       = 'mail.nanducho.com';                     // Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
//     $mail->Username   = 'donotreply@nanducho.com';               // SMTP username
//     $mail->Password   = '24replyforall*';                       // SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
//     $mail->Port       =  465;                                    // TCP port to connect to

//     //Recipients
//     $mail->setFrom('donotreply@nanducho.com', 'Nanducho mail service');
//     $mail->addAddress('5rsupport@cykleek.com', 'Recipient Name'); // Add a recipient

//     // Content
//     $mail->isHTML(true);                                        // Set email format to HTML
//     $mail->Subject = $subject;
//     $mail->Body    = "Name: $name<br>Email: $email<br>Message: $message";
//     $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message\nTel: $tel";

//     $mail->send();
//     echo "Message sent successfully";
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }


?>
