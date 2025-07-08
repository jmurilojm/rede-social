// fazer o registro
function registrar(event){
    event.preventDefault()

    const nomeInformado = document.getElementById('inNome').value.trim()
    const emailInformado = document.getElementById('inEmail').value.trim()
    const senhaInformada = document.getElementById('inSenha').value
    const confirmacaoSenha = document.getElementById('inConfirmacaoSenha').value

    if(validarFormulario(nomeInformado,emailInformado,senhaInformada,confirmacaoSenha)){
        alert('Cadastrado com sucesso')

        // limpar campos
        limparCampos()
    }
}

// validacao
function validarFormulario(nome,email,senha,confirmacao){
    let camposValidados = true

    if(nome.indexOf(' ') <= -1){
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroName','Informe seu nome completo.')
    }
    if(!validarEmail(email)){
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroEmail','Verifique o email. Informe como o exemplo: exemplo@email.com')
    }
    if(!validarSenha(senha)){
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroSenha','Preecha a senha com letras maiúsculas e minúsculas, um numero e, no mínimo, 8 caracteres.')
    }
    if(senha != confirmacao){
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroConfrimacaoSenha','Senha de confirmação não corresponde.')
    }

    return camposValidados
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

// para exibir e oucultar a mensagem de erro
function mostrarMensagemDeErro(idElemento, mensagem){
    document.getElementById(idElemento).style.display = 'block'
    document.getElementById(idElemento).textContent = mensagem
}
function limparMensagemDeErro(idElemento){
    document.getElementById(idElemento).style.display = 'none'
}
function validarSenha(idElemento){
    if(idElemento.length < 8){
        return false
    } else if (!/\d/.test(idElemento)) {
        return false
    } else if (!/[A-Z]/.test(idElemento)) {
        return false
    }    
    return true
}

// mostrar e ocultar senha
function mostrarSenha(idElemento,idElemento2){
    const tipo = document.getElementById(idElemento).type
    if(tipo == 'password'){
        document.getElementById(idElemento).type = 'text'
        document.getElementById(idElemento2).classList.toggle('fa-eye')
        document.getElementById(idElemento2).classList.toggle('fa-eye-slash')
    } else{
        document.getElementById(idElemento).type = 'password'
        document.getElementById(idElemento2).classList.toggle('fa-eye')
        document.getElementById(idElemento2).classList.toggle('fa-eye-slash')
    }
}

// limpar fromulario
function limparCampos(){
    document.getElementById('inNome').value = ''
    document.getElementById('inEmail').value = ''
    document.getElementById('inSenha').value = ''
    document.getElementById('inConfirmacaoSenha').value = ''
}