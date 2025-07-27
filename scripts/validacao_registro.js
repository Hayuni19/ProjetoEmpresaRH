let botao = document.getElementById('incluirButton')

botao.addEventListener('click', function (e) {
    let nome = document.getElementById('nome');
    let data = document.getElementById('data');
    let telefone = document.getElementById('telefone');
    let email = document.getElementById('email');
    nome.setCustomValidity(nome.value == '' ?
        'Informe corretamente o nome do candidato' : '');
    data.setCustomValidity(data.value == '' ?
        'Informe corretamente a data de nascimento do candidato' : '');
    telefone.setCustomValidity(telefone.value == '' ?
        'Informe corretamente o telefone do candidato' : '');
    email.setCustomValidity(email.value == '' ?
        'Informe corretamente o email do candidato' : '');
});