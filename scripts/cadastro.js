$(document).ready(function () {

    // Carregar candidatos na tabela
    $('#listarButton').click(function () {
        $.ajax({
            url: 'http://localhost:3000/candidatos',
            method: 'GET',
            dataType: 'json',
            success: function (resposta) {
                $('#tabela > tbody').empty();
                resposta.forEach(function (item) {
                    let linha = $('<tr>');
                    linha.append('<td>' + item.id + '</td>');
                    linha.append('<td>' + item.nome + '</td>');
                    linha.append('<td>' + item.telefone + '</td>');
                    $('#tabela > tbody').append(linha);
                });
            },
            error: function (erro) {
                console.log('Erro ao listar:', erro);
            }
        });
    });

    // Incluir novo candidato
    $('#incluirButton').click(function () {
        const dados = {
            nome: $('#nome').val(),
            dataNascimento: $('#data').val(),
            sexo: $('input[name="sexo"]:checked').val(),
            telefone: $('#telefone').val(),
            email: $('#email').val(),
            tipo: $('input[name="tipo"]:checked').val(),
            vaga: $('#vaga').val()
        };

        $.ajax({
            url: 'http://localhost:3000/candidatos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function (res) {
                alert('Candidato incluído com sucesso!');
                // Opcional: limpar formulário após incluir
                $('form')[0].reset();
                // Opcional: atualizar lista automaticamente
                $('#listarButton').click();
            },
            error: function (err) {
                console.log('Erro ao incluir:', err);
            }
        });
    });

});
