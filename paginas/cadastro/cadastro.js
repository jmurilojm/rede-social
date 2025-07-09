// fazer o registro
function registrar(event) {
    event.preventDefault()

    const nomeInformado = document.getElementById('inNome').value.trim()
    const emailInformado = document.getElementById('inEmail').value.trim()
    const senhaInformada = document.getElementById('inSenha').value
    const confirmacaoSenha = document.getElementById('inConfirmacaoSenha').value

    if (validarFormulario(nomeInformado, emailInformado, senhaInformada, confirmacaoSenha)) {
        //alert('Cadastrado com sucesso')

        //Biblioteca: usei CDN (https://sweetalert2.github.io/)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

        // limpar campos
        limparCampos()
    }
}

// validacao campos de registro
function validarFormulario(nome, email, senha, confirmacao) {
    let camposValidados = true

    if (nome.indexOf(' ') <= -1) {
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroName', 'Informe seu nome completo.')
    }
    if (!validarEmail(email)) {
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroEmail', 'Verifique o email. Informe como o exemplo: exemplo@email.com')
    }
    if (!validarSenha(senha)) {
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroSenha', 'Preecha a senha com letras maiúsculas e minúsculas, um numero e, no mínimo, 8 caracteres.')
    }
    if (senha != confirmacao) {
        camposValidados = false
        mostrarMensagemDeErro('outMsmErroConfrimacaoSenha', 'Senha de confirmação não corresponde.')
    }

    return camposValidados
}


// limpar fromulario
function limparCampos() {
    document.getElementById('inNome').value = ''
    document.getElementById('inEmail').value = ''
    document.getElementById('inSenha').value = ''
    document.getElementById('inConfirmacaoSenha').value = ''
}