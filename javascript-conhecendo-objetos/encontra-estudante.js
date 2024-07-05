const estudantes = require('./estudantes.json')

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)

const telefone = buscaInformacao(estudantes, 'telefone', "92991767581")
console.log(telefone)