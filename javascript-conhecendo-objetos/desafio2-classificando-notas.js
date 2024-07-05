const pessoa = {
    usuario1: {
      nome: 'Alex Ramada',
      nota: 5.5
    },
    usuario2: {
      nome: 'Igor Guimarães',
      nota: 6.9
    }
  };
  
  function classificarNota(nome, nota) {
    if (nota >= 9) {
      console.log(`O aluno ${nome} teve um desempenho excelente`);
    } else if (nota >= 7.5) {
      console.log(`O aluno ${nome} teve um bom desempenho`);
    } else if (nota >= 6) {
      console.log(`O aluno ${nome} teve um desempenho regular`);
    } else if (nota <= 6) {
      console.log(`O aluno ${nome} teve um desempenho insuficiente`);
    }
  const calcularMedia = nota/ nota.length
}
  
  for (const usuario in pessoa) {
    classificarNota(pessoa[usuario].nome, pessoa[usuario].nota);
  }
  
  const notas = [];
for (const usuario in pessoa) {
  notas.push(pessoa[usuario].nota);
}

const calcularMedia = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
console.log(calcularMedia);