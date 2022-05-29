const url = 'http://localhost:4000/v1/cliente'

var btn1 = document.getElementById('btn')
var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var endereco = document.getElementById('endereco');
var telefone = document.getElementById('telefone');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var sexo = document.getElementById('sexo');


function postCliente() {
    var nomeValue = nome.value;
    var cpfValue = cpf.value;
    var enderecoValue = endereco.value;
    var telefoneValue = telefone.value;
    var emailValue = email.value;
    var senhaValue = senha.value;
    var sexoValue = sexo.value;


    if (nomeValue == '') {
        return console.log('Você precisa inserir um nome');
    }
    if (cpfValue == '') {
        return console.log('Você precisa inserir um cpf');
    }
    if (enderecoValue == '') {
        return console.log('Você precisa inserir um endereco');
    }
    if (telefoneValue == '') {
        return console.log('Você precisa inserir um telefone');
    }
    if (emailValue == '') {
        return console.log('Você precisa inserir um email');
    }
    if (senhaValue == '') {
        return console.log('Você precisa inserir uma senha');
    }
    if (sexoValue == '') {
        return console.log('Você precisa inserir um sexo');
    } else {
        axios.post(url, {
            nome: nomeValue,
            cpf: cpfValue,
            sexo: sexoValue,
            endereco: enderecoValue,
            telefone: telefoneValue,
            email: emailValue,
            senha: senhaValue
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log("retorno do servidor");
                console.log(res.data);
                console.log('usario criado!')
                window.location = '/home.html';
            }).catch((e) => {
                console.log(e)
            })
    }

}


// function getClients() {
//     axios.get(url)
//         .then((res) => {
//             console.log("retorno do servidor");
//             console.log(res.data);
//         })
//         .catch((e) => {
//             console.log("erro", e
//             );
//         });
// }