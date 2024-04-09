//elabore uma fuction que recebe um objeto com estudantes e suas notas em um array e calcule a média de cada aluno e retorne um objeto com o nome e média do melhor aluno
const melhorEstudante = function (estudantes) {
    let melhorMedia = 0
    let melhorAluno = ''
    for (let aluno in estudantes) {
        let notas = estudantes[aluno]
        let somaNotas = 0

        for (let nota of notas){
            somaNotas += nota
        }
    
        let media = somaNotas / notas.length
    
        if (media > melhorMedia) {
            melhorMedia = media
            melhorAluno = aluno
        }
    }
    return{
        nome: melhorAluno,
        media: melhorMedia
    } 
}

console.log(melhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))