document.getElementById('incluirButton').addEventListener('click', async () => {
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data').value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value;
    const vaga = document.getElementById('vaga').value;

    const candidato = {
        nome,
        dataNascimento,
        sexo,
        telefone,
        email,
        tipo,
        vaga
    };

    try {
        const response = await fetch('http://localhost:3000/candidatos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidato)
        });

        if (response.ok) {
            alert('Candidato cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar candidato.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro na conexão com o servidor.');
    }
});
