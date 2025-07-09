function enviarEmailParaRecuperacao(){
    let emailInformado = document.getElementById('inEmail').value.trim()
    
    if(validarEmail(emailInformado)){
        console.log('ok')
        let emailInformado = document.getElementById('inEmail').value = ''
        window.location.href = 'recuperar_senha_mensagem.html'

    } else{
        mostrarMensagemDeErro('outMsmErroEmail', 'Verifique o email. Informe como o exemplo: exemplo@email.com')
    }
}