//rest (juntar) spread (espalhar)
//usar rest como parâmetro de função

//usar spread com objeto 
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const GrupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(GrupoFinal)