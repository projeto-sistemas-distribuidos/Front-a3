var buscar = document.getElementById('buscar');
const url = 'http://localhost:4000/v1/profissional';
 // buscar profissionais 

function buscarProfissionais() {
    axios.get(url)
        .then((res) => {
            console.log("retorno do servidor");
            console.log(res.data);
        })
        .catch((e) => {
            console.log("erro", e
            );
        });
}