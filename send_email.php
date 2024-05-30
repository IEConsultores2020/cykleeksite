<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    $to = "5rsupport@cykleek.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_body = "You have received a new message from the contact form on your website.\n\n".
                  "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Use mail() function to send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Message sent successfully";
    } else {
        echo "Failed to send message";
    }
} else {
    echo "Invalid request method";
}
?>
