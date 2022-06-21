// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {

        console.log(data);
        renderizarDadosUsuario(data.results[0])
    });

function renderizarDadosUsuario(dados) {

    let card = document.querySelector('.card');

    let img = document.createElement('img')
    img.src = dados.picture.medium;
    // document.body.appendChild(img)

    let nome = document.createElement('h1')
    nome.setAttribute('class', 'nome')
    nome.innerText = dados.name.first
    // document.body.appendChild(nome)

    let email = document.createElement('p')
    email.setAttribute('class', 'email')
    email.innerText = dados.email
    // document.body.appendChild(email)

    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(email)
}

function substituirDadosUsuario(dados) {
    let img = document.querySelector('img')
    img.src = dados.picture.medium;

    let nome = document.querySelector('.nome')
    nome.innerText = dados.name.first

    let email = document.querySelector('.email')
    email.innerText = dados.email
}

let btn = document.getElementById('random')

btn.addEventListener('click', function () {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            substituirDadosUsuario(data.results[0])
        });
})
