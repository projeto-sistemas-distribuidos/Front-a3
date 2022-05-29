const url = 'http://localhost:4000/v1/profissional'

var btn1 = document.getElementById('btn')
var nome = document.getElementById('nome');
var cpf_cnpj = document.getElementById('cpf_cnpj');
var sexo = document.getElementById('sexo');
var endereco = document.getElementById('endereco');
var telefone = document.getElementById('telefone');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var area_atuacao = document.getElementById('area_atuacao');
var descricao = document.getElementById('descricao');

function postCliente() {
    var nomeValue = nome.value;
    var cpf_cnpjValue = cpf_cnpj.value;
    var sexoValue = sexo.value;
    var enderecoValue = endereco.value;
    var telefoneValue = telefone.value;
    var emailValue = email.value;
    var senhaValue = senha.value;
    var area_atuacaoValue = area_atuacao.value;
    var descricaoValue = descricao.value;


    if (nomeValue == '') {
        return console.log('Você precisa inserir um nome.');
    }
    if (cpf_cnpjValue == '') {
        return console.log('Você precisa inserir um cpf ou cnpj.');
    }
    if (sexoValue == '') {
        return console.log('Você precisa inserir um sexo.');
    }
    if (enderecoValue == '') {
        return console.log('Você precisa inserir um endereço.');
    }
    if (telefoneValue == '') {
        return console.log('Você precisa inserir um telefone.');
    }
    if (emailValue == '') {
        return console.log('Você precisa inserir um email.');
    }
    if (senhaValue == '') {
        return console.log('Você precisa inserir uma senha.');
    }
    if (area_atuacaoValue == '') {
        return console.log('Você precisa inserir uma area de atuação.');
    }
    if (descricaoValue == '') {
        return console.log('Você precisa inserir uma descrição.');
    } else {
        axios.post(url, {
            nome: nomeValue,
            cpf_cnpj: cpf_cnpjValue,
            sexo: sexoValue,
            endereco: enderecoValue,
            telefone: telefoneValue,
            email: emailValue,
            senha: senhaValue,
            area_atuacao: area_atuacaoValue,
            descricao: descricaoValue,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log("retorno do servidor");
                console.log(res.data);
                console.log('profissional criado!');
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