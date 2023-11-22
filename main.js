const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;

    linha += '<tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value= '';

    
});