const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')


//desafio: pegue todas as mulher chinesas do json
const chineses = funcionario => funcionario.pais === 'China'
const apenasMulher = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const resultado = funcionarios.filter(chineses).filter(apenasMulher).reduce(menorSalario)
    console.log(resultado)
})



