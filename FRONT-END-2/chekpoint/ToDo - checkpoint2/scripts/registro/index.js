let nomeRegister = document.querySelector("#inputNome");
let sobrenomeRegister = document.querySelector("#inputSobrenome");
let emailRegister = document.querySelector("#inputEmail");
let passwordRegister = document.querySelector("#inputPassword");
let confirmPasswordRegister = document.querySelector("#inputConfirmPassword");
let botaoRegister = document.querySelector("#botaoRegister");

let validacaoNome = document.querySelector("#validacaoNome");
let validacaoSobrenome = document.querySelector("#validacaoSobrenome");
let validacaoEmail = document.querySelector("#validacaoEmail");
let validacaoPassword = document.querySelector("#validacaoPassword");
let validacaoConfirmPassword = document.querySelector("#validacaoConfirmPassword");


let objetoUsuario = {
    nome: "",
    email: "",
    password: "",
    confirmPassword: ""
}

botaoRegister.addEventListener("click", (e) => {
    e.preventDefault();

    if (validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value)) {
        e.preventDefault();

        /* Normalização */
        nomeRegister = nomalizaTextoRetiraEspacos(nomeRegister.value);
        sobrenomeRegister = nomalizaTextoRetiraEspacos(sobrenomeRegister.value);
        emailRegister = nomalizaTextoRetiraEspacos(emailRegister.value);
        passwordRegister = nomalizaTextoRetiraEspacos(passwordRegister.value);
        confirmPasswordRegister = nomalizaTextoRetiraEspacos(confirmPasswordRegister.value);

        objetoUsuario.nome = nomeRegister;
        objetoUsuario.email = emailRegister;
        objetoUsuario.password = passwordRegister;
        objetoUsuario.confirmPassword = confirmPasswordRegister;

        let objetoUsuarioEmJson = JSON.stringify(objetoUsuario);

        console.log(objetoUsuarioEmJson);

    }
});

sobrenomeRegister.addEventListener("keyup", (e) => {
    let validacaoSobrenome = document.querySelector("#validacaoSobrenome");
    let campoSobrenomeVazio = sobrenomeRegister.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoSobrenomeInvalido = sobrenomeRegister.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) ? "" : "Sobrenome inválido";

    if(campoSobrenomeVazio){
        validacaoSobrenome.innerText = campoSobrenomeVazio;
        sobrenomeRegister.style.border = "2px solid #E9554EBB";
        validacaoSobrenome.style.color = "#E9554EBB";
    }
    else if (campoSobrenomeInvalido) {
        validacaoSobrenome.innerText = campoSobrenomeInvalido;
        sobrenomeRegister.style.border = "2px solid #E9554EBB";
        validacaoSobrenome.style.color = "#E9554EBB";
    }
    else {
        validacaoSobrenome.innerText = "";
        sobrenomeRegister.style.border = "2px solid #7898ff";
        validacaoSobrenome.style.color = "#7898ff";
    }

    validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value);
});

nomeRegister.addEventListener("blur", () => {
    let validacaoNome = document.getElementById("validacaoNome");
    let campoNomeVazio = nomeRegister.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoNomeInvalido = nomeRegister.value.match(/^[a-zA-Z]+$/) ? "" : "Nome inválido";

    if(campoNomeVazio){
        validacaoNome.innerText = campoNomeVazio;
        nomeRegister.style.border = "2px solid #E9554EBB";
        validacaoNome.style.color = "#E9554EBB";
    } else if (campoNomeInvalido) {
        validacaoNome.innerText = campoNomeInvalido;
        nomeRegister.style.border = "2px solid #E9554EBB";
        validacaoNome.style.color = "#E9554EBB";
    } else {
        validacaoNome.innerText = "";
        nomeRegister.style.border = "2px solid #7898ff";
        validacaoNome.style.color = "#7898ff";
    }

    validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value);
});

emailRegister.addEventListener("blur", () => {
    let validacaoEmail = document.getElementById("validacaoEmail");
    let campoEmailVazio = emailRegister.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoEmailInvalido = emailRegister.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? "" : "Email inválido";

    if(campoEmailVazio){
        validacaoEmail.innerText = campoEmailVazio;
        emailRegister.style.border = "2px solid #E9554EBB";
        validacaoEmail.style.color = "#E9554EBB";
    } else if (campoEmailInvalido) {
        validacaoEmail.innerText = campoEmailInvalido;
        emailRegister.style.border = "2px solid #E9554EBB";
        validacaoEmail.style.color = "#E9554EBB";
    }
    else {
        validacaoEmail.innerText = "";
        emailRegister.style.border = "2px solid #7898ff";
        validacaoEmail.style.color = "#7898ff";
    }

    validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value);

});

passwordRegister.addEventListener("blur", () => {
    let validacaoPassword = document.getElementById("validacaoPassword");
    let campoPasswordVazio = passwordRegister.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoPasswordInvalido = passwordRegister.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/) ? "" : "Senha inválida";

    if(campoPasswordVazio){
        validacaoPassword.innerText = campoPasswordVazio;
        passwordRegister.style.border = "2px solid #E9554EBB";
        validacaoPassword.style.color = "#E9554EBB";
    }
    else if (campoPasswordInvalido) {
        validacaoPassword.innerText = campoPasswordInvalido;
        passwordRegister.style.border = "2px solid #E9554EBB";
        validacaoPassword.style.color = "#E9554EBB";
    }
    else {
        validacaoPassword.innerText = "";
        passwordRegister.style.border = "2px solid #7898ff";
        validacaoPassword.style.color = "#7898ff";
    }

    validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value);
});

confirmPasswordRegister.addEventListener("blur", () => {
    let validacaoConfirmPassword = document.getElementById("validacaoConfirmPassword");
    let campoConfirmPasswordVazio = confirmPasswordRegister.value.length <= 0 ? "Campo obrigatorio" : "" ;
    let campoConfirmPasswordInvalido = confirmPasswordRegister.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/) ? "" : "Senha inválida";

    if(campoConfirmPasswordVazio){
        validacaoConfirmPassword.innerText = campoConfirmPasswordVazio;
        confirmPasswordRegister.style.border = "2px solid #E9554EBB";
        validacaoConfirmPassword.style.color = "#E9554EBB";
    }
    else if (campoConfirmPasswordInvalido) {
        validacaoConfirmPassword.innerText = campoConfirmPasswordInvalido;
        confirmPasswordRegister.style.border = "2px solid #E9554EBB";
        validacaoConfirmPassword.style.color = "#E9554EBB";
    }
    else {
        validacaoConfirmPassword.innerText = "";
        confirmPasswordRegister.style.border = "2px solid #7898ff";
        validacaoConfirmPassword.style.color = "#7898ff";
    }

    if(passwordRegister.value != confirmPasswordRegister.value){
        validacaoConfirmPassword.innerText = "Senhas não conferem";
        confirmPasswordRegister.style.border = "2px solid #E9554EBB";
        validacaoConfirmPassword.style.color = "#E9554EBB";
    }

    validaregister(nomeRegister.value, sobrenomeRegister.value, emailRegister.value, passwordRegister.value, confirmPasswordRegister.value);
});



function validaregister(nome, sobrenome, email, password, confirmPassword) {
    if (nome && sobrenome && email && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/) && confirmPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)) {
        //true
        botaoRegister.removeAttribute("disabled");
        botaoRegister.style.backgroundColor = "#7898ff";
        // botaoRegister.innerText = "Criar conta";
        return true;
    }
    //false
    else {
        botaoRegister.removeAttribute("disabled", true);
        botaoRegister.style.backgroundColor = "#979797";
        // botaoRegister.innerText = "Bloqueado";
        return false;
    }
}

