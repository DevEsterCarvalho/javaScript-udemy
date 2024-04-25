const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.push('Vestappen') //adiciona um novo elemento
console.log(pilotos)

//splice adiciona e remove elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)