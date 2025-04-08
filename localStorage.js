let dados = document.getElementById('form');

dados.addEventListener('submit', (e) => {
    let nome= dados.seu_nome.value;
    localStorage.setItem('nome', nome);

    window.onload = function () {
       let nomeArmazenado = localStorage.getItem('nome')
   
    }
})