function logar() {
    let emailInformado = document.getElementById('inEmail').value
    let senhaInformada = document.getElementById('inSenha').value

    if (validarLogin(emailInformado, senhaInformada)) {
        limparCampos()

        window.location.href = '../feed/feed.html'
    }
    return false
}

function validarLogin(email, senha) {
    let camposValidados = true

    if (!validarEmail(email)) {
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroEmail', 'Verifique o email. Informe como o exemplo: exemplo@email.com')
    }
    if (!validarSenha(senha)) {
        camposValidados = false
    }

    return camposValidados
}


// configurando confirmação visual por meio dos pontinhos
function mostrarErroSenha() {
    let senhaInformada = document.getElementById('inSenha').value.trim()
    if (!/[A-Z]/.test(senhaInformada)) {
        document.getElementById('confirmarMaiuscula').classList.add('erro')
        document.getElementById('confirmarMaiuscula').classList.remove('sucesso')
    } else {
        document.getElementById('confirmarMaiuscula').classList.remove('erro')
        document.getElementById('confirmarMaiuscula').classList.add('sucesso')
    }

    if (!/\d/.test(senhaInformada)) {
        document.getElementById('confirmarNumero').classList.add('erro')
        document.getElementById('confirmarNumero').classList.remove('sucesso')
    } else {
        document.getElementById('confirmarNumero').classList.remove('erro')
        document.getElementById('confirmarNumero').classList.add('sucesso')
    }

    if (!/[a-z]/.test(senhaInformada)) {
        document.getElementById('confirmarMinuscula').classList.add('erro')
        document.getElementById('confirmarMinuscula').classList.remove('sucesso')
    } else {
        document.getElementById('confirmarMinuscula').classList.remove('erro')
        document.getElementById('confirmarMinuscula').classList.add('sucesso')
    }

    if (senhaInformada.length < 8) {
        document.getElementById('confirmarTotalDeDigitos').classList.add('erro')
        document.getElementById('confirmarTotalDeDigitos').classList.remove('sucesso')
    } else {
        document.getElementById('confirmarTotalDeDigitos').classList.remove('erro')
        document.getElementById('confirmarTotalDeDigitos').classList.add('sucesso')
    }
    return
}

function limparCampos() {
    let emailInformado = document.getElementById('inEmail').value = ''
    let senhaInformada = document.getElementById('inSenha').value = ''
    return
}