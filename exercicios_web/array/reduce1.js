const alunos = [
    {nome: 'João', nota: 9.3, bolsista: false},
    {nome: 'Maria', nota: 10, bolsista: true},
    {nome: 'Vitor', nota: 7.6, bolsista: true},
    {nome: 'Julia', nota: 8, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado) 