// mostrar e ocultar senha
function mostrarSenha(idElemento, idElemento2) {
    const tipo = document.getElementById(idElemento).type
    if (tipo == 'password') {
        document.getElementById(idElemento).type = 'text'
        document.getElementById(idElemento2).classList.toggle('fa-eye')
        document.getElementById(idElemento2).classList.toggle('fa-eye-slash')
    } else {
        document.getElementById(idElemento).type = 'password'
        document.getElementById(idElemento2).classList.toggle('fa-eye')
        document.getElementById(idElemento2).classList.toggle('fa-eye-slash')
    }
}

function validarSenha(idElemento) {
    if (idElemento.length < 8) {
        return false
    } else if (!/\d/.test(idElemento)) {
        return false
    } else if (!/[A-Z]/.test(idElemento)) {
        return false
    } else if (!/[a-z]/.test(idElemento)) {
        return false
    }
    return true
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// para exibir e oucultar a mensagem de erro
function mostrarMensagemDeErro(idElemento, mensagem) {
    document.getElementById(idElemento).style.display = 'block'
    document.getElementById(idElemento).textContent = mensagem
}
function limparMensagemDeErro(idElemento) {
    document.getElementById(idElemento).style.display = 'none'
}