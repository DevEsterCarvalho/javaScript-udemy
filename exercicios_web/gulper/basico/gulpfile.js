const gulp = require ('gulp')
const series = gulp.series

function copiar (cb) {
    console.log('Tarefa copiar')
    return cb()
}

module.exports.default = series(copiar)