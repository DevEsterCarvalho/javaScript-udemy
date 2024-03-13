function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV = trabalho1 && trabalho2
    const comprarTV50 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {
        comprarSorvete, comprarTV, comprarTV50, manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))