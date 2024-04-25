//elabore uma function que recebe um objeto e retorna um outro objeto com as posições de chave e valor invertidas
const inverter = function (obj) {
    let objeto = {}
    for (let key in obj ) {
        objeto[obj[key]] = key
    }
    return objeto
}

console.log(inverter({a: 1, b: 2, c: 3}))