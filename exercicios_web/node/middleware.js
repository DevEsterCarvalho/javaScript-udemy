//middleware pattern (chain of responsibility)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto, next) => contexto.valor3 = 'mid3'

const execute = (contexto, ...middlewares) => { // ... vai juntar tudo dentro de um array 
    const executePasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => executePasso(indice + 1))
    }
    executePasso(0)
}

const contexto = {}
execute(contexto, passo1, passo2, passo3)
console.log(contexto)