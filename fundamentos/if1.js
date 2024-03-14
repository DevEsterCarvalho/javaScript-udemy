function validadorNota (nota){
    if(nota  >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}

validadorNota(8.1)
validadorNota(6.1)

function verdade (valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

verdade()
verdade(null)
verdade(undefined)
verdade(NaN)
verdade('')
verdade(0)
verdade(-1)
verdade(' ')
verdade([])
verdade('?')