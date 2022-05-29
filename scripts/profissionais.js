const url = 'http://localhost:4000/v1/profissional';
// buscar profissionais 

function buscarProfissionais() {
    axios.get(url)
        .then((res) => {
            // console.log("retorno do servidor");
            // console.log(res.data);
            // const data = res.json();
            // console.log(data);
            exibirProfissionais(res.data)
        })
        .catch((e) => {
            console.log("erro", e
            );
        });
}

buscarProfissionais();

function exibirProfissionais(users) {
    let output = ''
    for (let user of users) {
        output += `<div class="conteudo-card">`
        output += `<h1>${user.nome}</h1>`
        output += `<p>Area de atuação: ${user.area_atuacao}</p>`
        output += `<p>UF: ${user.endereco}<p>`
        output += `<p>Telefone: ${user.telefone}</p>`
        output += `<p>Descrição: ${user.descricao}</p>`
        output += `<button>Contrate já</button>`
        output += `</div>`
    }
    document.querySelector('.conteudo').innerHTML = output;
}