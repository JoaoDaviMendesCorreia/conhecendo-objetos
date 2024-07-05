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


estudante.endereço.push({
    rua: 'rua ferdse',
    numero: '34',
    complemento: ''})
    
   // console.log(estudante.endereço)
//console.log(estudante.endereço[0])

const listaEndereçosComComplemento = estudante.endereço.filter((endereço) => 
endereço.complemento)

console.log(listaEndereçosComComplemento)