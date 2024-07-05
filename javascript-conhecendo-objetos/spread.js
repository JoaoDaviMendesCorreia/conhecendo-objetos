const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: [
      '123049394', 
     '232230240902'
    ],
    endereço : [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
    }]
}
 function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
 }
 exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
 exibirTelefones(...estudante.telefones)// mais pratico

 const dadosEnvio = {
    destinatario : estudante.nome,
    ...estudante.endereço[0]
 }
 console.log(dadosEnvio)