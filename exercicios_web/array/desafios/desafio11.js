function removerPropriedade (object, nomePropriedade) {
    const copia = Object.assign({}, object)
    delete copia[nomePropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "b"))
console.log(removerPropriedade({
    id: 35, 
    nome: "Roberta",
    cargo: "Advogada"},
    "cargo"
))