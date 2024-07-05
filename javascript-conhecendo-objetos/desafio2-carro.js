const carro = {
    marca : 'toyota',
    modelo : 'corolla',
    ano : '2022',
    cor : 'branco'
}
for (let chave in carro) {
    console.log(`sua chave é ${chave} e seu valor é ${carro[chave]}`)
}