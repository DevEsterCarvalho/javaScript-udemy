//desenvolva uma função que recebe dois parametros, um é a quantidade de horas trabalhadas por um funcionário no mês e o quanto ele recebe por hora.
//O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

const calcularSalario = function(horasTrabalhadas, hora) {
    return horasTrabalhadas * hora
}
console.log(calcularSalario(150, 40.5))