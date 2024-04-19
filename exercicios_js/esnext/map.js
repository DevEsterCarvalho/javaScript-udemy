const tecnologias = new Map()
tecnologias.set('react', {frameworks: false})
tecnologias.set('angular', {frameworks: true}) 

console.log(tecnologias.react)
console.log(tecnologias.get('react').frameworks)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

