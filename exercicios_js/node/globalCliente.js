require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Nome novo'
console.log(MinhaApp.nome)//freeze então retorna o primeiro novo atribuido