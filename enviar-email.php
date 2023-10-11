<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $assunto = $_POST["assunto"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    if (empty($nome) || empty($assunto) || empty($email) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos do formulário.";
    } else {
        $to = "gabiqss1@gmail.com";
        $subject = "Assunto: $assunto";
        $message = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";
        
        $headers = "From: $email";
        
        if (mail($to, $subject, $message, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Ocorreu um erro ao enviar a mensagem.";
        }
    }
}
?>
