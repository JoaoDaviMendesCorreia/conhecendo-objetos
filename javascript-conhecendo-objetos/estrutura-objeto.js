const objPessoa = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(objPessoa);
console.log(objPessoa.cpf);
console.log(`A turma do estudante é ${objPessoa.turma}`);
console.log(`e os 3 primeiros numeros de seu cpf é ${objPessoa.cpf.substring(0, 3)}`
);
