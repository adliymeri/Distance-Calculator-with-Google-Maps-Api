<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
    require_once __DIR__ . '/PHPMailer/src/Exception.php';


    // The input fields variables

    $merch = $_POST['merchType'];
    $load = $_POST['numeroDiBancali'];
    $typeload = $_POST['loadType'];
    $weight = $_POST['pesoTotale'];
    $origin = $_POST['luogoCarico'];
    $origincompany = $_POST['originCompany'];
    $destination = $_POST['luogoScarico'];
    $destinationcompany = $_POST['destinationCompany'];
    $newdestination = $_POST['nuovoLuogoScarico'];
    if (is_array($newdestination)) {
        $newdestinationString = implode("; ", $newdestination);
    }
     
    $distance = $_POST['Distanza'];
    $price = $_POST['Prezzo'];
    $name = $_POST['Nome'];
    $lastname = $_POST['Cognome'];
    $companyname = $_POST['nomeAzienda'];
    $nipt = $_POST['partitaIva'];
    $companymail = $_POST['emailAziendale'];
    $companyphone = $_POST['telefonoAziendale'];
    $merchtype = $_POST['tipologiaDiMerce'];
    $length = $_POST['lunghezza'];
    $width = $_POST['larghezza'];
    $height = $_POST['altezza'];

    if (isset($_POST['caricoCompleto'])) {
        // Checkbox was checked
        $full = 'Carico Completo';
    } 

    if (isset($_POST['caricoParziale'])) {
        // Checkbox was checked
        $less = 'Carico Parziale';
    } 
    
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    // Create a new PHPMailer object
    $mail = new PHPMailer;

    // Set SMTP settings for first email
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAuth = true;
    $mail->Username = '****';
    $mail->Password = '****';
    

    // Set email content for the first email
    $mail->setFrom('commerciale@land-g.com');
    $mail->addAddress('commerciale@land-g.com');
    $mail->Subject = "Hai ricevuto una richiesta di preventivo da: " . $name . " " . $lastname;
    $mailBody = "";
if (!empty($name)) {
    $mailBody .= "Nome: " . $name . "\n\n";
}
if (!empty($lastname)) {
    $mailBody .= "Cognome: " . $lastname . "\n\n";
}
if (!empty($companyname)) {
    $mailBody .= "Nome Azienda: " . $companyname . "\n\n";
}
if (!empty($nipt)) {
    $mailBody .= "Partita Iva: " . $nipt . "\n\n";
}
if (!empty($companymail)) {
    $mailBody .= "Email Aziendale: " . $companymail . "\n\n";
}
if (!empty($companyphone)) {
    $mailBody .= "Telefono Aziendale: " . $companyphone . "\n\n";
}

if (!empty($origin)) {
    $mailBody .= "Località di Carico: " . $origin . "\n\n";
}
if (!empty($destination)) {
    $mailBody .= "Località di Scarico: " . $destination . "\n\n";
}
if (!empty($newdestinationString)) {
    $mailBody .= "Molteplici Luoghi di Scarico: " . $newdestinationString . "\n\n";
}
if (!empty($distance)) {
    $mailBody .= "Distanza: " . $distance . "\n\n";
}
if (!empty($price)) {
    $mailBody .= "Prezzo: " . $price . "\n\n";
}
if (!empty($full) || !empty($less)) {
    $mailBody .= "Tipo di Carico: " . $full . $less . "\n\n";
}
if (!empty($merch)) {
    $mailBody .= "Tipo di Merce: " . $merch . "\n\n";
}
if (!empty($load)) {
    $mailBody .= "Numero di bancali: " . $load . "\n\n";
}
if (!empty($typeload)) {
    $mailBody .= "Modalità Carico: " . $typeload . "\n\n";
}
if (!empty($weight)) {
    $mailBody .= "Peso totale della merce: " . $weight . "\n\n";
}
if (!empty($length)) {
    $mailBody .= "Lunghezza: " . $length . "\n\n";
}
if (!empty($width)) {
    $mailBody .= "Larghezza: " . $width . "\n\n";
}
if (!empty($height)) {
    $mailBody .= "Altezza: " . $height . "\n\n";
}
if (!empty($merchtype)) {
    $mailBody .= "Tipologia di Merce: " . $merchtype;
}

$mail->Body = $mailBody;

    $mail->CharSet = 'UTF-8';

    // Set SMTP settings for second email

    $mail2 = new PHPMailer;
    $mail2->isSMTP();
    $mail2->Host = 'smtp.gmail.com';
    $mail2->Port = 465;
    $mail2->SMTPSecure = 'ssl';
    $mail2->SMTPAuth = true;
    $mail2->Username = '****';
    $mail2->Password = '****';

    // Set email content for the second email

    $mail2->setFrom('commerciale@land-g.com');
    $mail2->addAddress($companymail);
    $mail2->Subject = "Ecco la Tua Offerta di Land Group per la Spedizione richiesta!";
    $mail2->Body = $mailBody;
    $mail2->CharSet = 'UTF-8';

    // Send email
    if ($mail->send() && $mail2->send()) {
        sleep(5);
        header('Location: https://www.land-g.com/');
    } else {
        echo 'Error: ' . $mail->ErrorInfo;
    }

?>
