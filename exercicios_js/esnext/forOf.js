for (let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosAula = ['Map', 'Set', 'Promisse']
for (let i in assuntosAula) {
    console.log(i)
}

for (let assunto of assuntosAula){
    console.log(assunto)
}

const assuntosMap = new Map ([
    ['Map', { abordado: true }],
    ['Set' , { abordado: true }],
    ['Promisse', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}