const alunos = [
    {nome: 'João', nota: 9.3, bolsista: false},
    {nome: 'Maria', nota: 10, bolsista: true},
    {nome: 'Vitor', nota: 7.6, bolsista: true},
    {nome: 'Julia', nota: 8, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas? 

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => bolsista == true // ou resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))