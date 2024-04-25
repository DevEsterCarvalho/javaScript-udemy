const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incremento()
contadorA.incremento()
console.log(contadorA.valor, contadorB.valor)//simplesmente importa um obj do node que faz cache do obj que já foi criado, retornando a mesma instancia

contadorC.incremento()
contadorC.incremento()
console.log(contadorC.valor, contadorD.valor)//nova instancia criada por uma factory