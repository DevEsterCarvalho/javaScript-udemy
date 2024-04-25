//fuction que recebe um objeto como parametro e retorna um array de arrays, onde cada elemento é formado pelos pares chave/valor
function objetoParaArray (objeto) {
    const chaves = Object.keys(objeto)
    const valor = Object.values(objeto)
    const arrays = []
    for (let i = 0; i < chaves.length; i ++) {
        arrays.push([chaves[i], valor[i]])
    }
    return arrays
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

console.log(objetoParaArray({
    codigo: "1111", 
    preco: 12000
}))