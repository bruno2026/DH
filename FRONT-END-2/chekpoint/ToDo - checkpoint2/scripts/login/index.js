let emailLogin = document.getElementById("inputEmail");
let passwordLogin = document.getElementById("inputPassword");

let botaoLogin = document.getElementById("botaoLogin");

//botaoLogin.style.backgroundColor = "#979292";
//botaoLogin.innerText = "Bloqueado";

let objetoUsuario = {
    email: "",
    password: ""
}

botaoLogin.addEventListener("click", (e) => {

    e.preventDefault();

    if (validaLogin(emailLogin.value, passwordLogin.value)) {
        e.preventDefault();

        /* Normalização */
        emailLogin = nomalizaTextoRetiraEspacos(emailLogin.value);
        passwordLogin = nomalizaTextoRetiraEspacos(passwordLogin.value);

        objetoUsuario.email = emailLogin;
        objetoUsuario.password = passwordLogin;

        let objetoUsuarioEmJson = JSON.stringify(objetoUsuario);

        console.log(objetoUsuarioEmJson);

    }

});

emailLogin.addEventListener("blur", () => {

    let validacaoEmail = document.getElementById("validacaoEmail");

    let campoEmailVazio = emailLogin.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoEmailInvalido = emailLogin.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? "" : "Email inválido";
    
    if(campoEmailVazio){
        validacaoEmail.innerText = campoEmailVazio;
        emailLogin.style.border = "2px solid #E9554EBB";
        validacaoEmail.style.color = "#E9554EBB";
    } else if (campoEmailInvalido) {
        validacaoEmail.innerText = campoEmailInvalido;
        emailLogin.style.border = "2px solid #E9554EBB";
        validacaoEmail.style.color = "#E9554EBB";
    } else {
        validacaoEmail.innerText = "";
        emailLogin.style.border = "2px solid #7898ff";
        validacaoEmail.style.color = "#7898ff";
    }
    
    validaLogin(emailLogin.value, passwordLogin.value);

});

passwordLogin.addEventListener("blur", () => {
    let validacaoSenha = document.getElementById("validacaoSenha");

    let campoSenhaInvalida = passwordLogin.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/) ? "" : "Senha inválida" ;
    let campoSenhaVazio = passwordLogin.value.length <= 0 ? "Campo obrigatorio" : "" ;

    if(campoSenhaVazio){
        validacaoSenha.innerText = campoSenhaVazio;
        passwordLogin.style.border = "2px solid #E9554EBB";
        validacaoSenha.style.color = "#E9554EBB";
    } else if (campoSenhaInvalida) {
        validacaoSenha.innerText = campoSenhaInvalida;
        passwordLogin.style.border = "2px solid #E9554EBB";
        validacaoSenha.style.color = "#E9554EBB";
    } else {
        validacaoSenha.innerText = "";
        passwordLogin.style.border = "2px solid #7898ff";
        validacaoSenha.style.color = "#7898ff";
    }

    validaLogin(emailLogin.value, passwordLogin.value);

});

function validaLogin(email, password) {
    if (email && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)) {
        //True
        botaoLogin.removeAttribute("disabled");
        botaoLogin.style.backgroundColor = "#7898ff";
        botaoLogin.innerText = "Acessar";

        return true;

    } else {
        //False
        botaoLogin.removeAttribute("disabled", true);
        botaoLogin.style.backgroundColor = "#979797";
        botaoLogin.innerText = "Bloqueado";

        return false;

    }
}