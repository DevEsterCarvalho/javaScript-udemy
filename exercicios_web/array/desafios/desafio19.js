//faça um fuction que recebe a área de um triângulo e retorne a área desse, a precisão deve ser de duas casas decimais, arredondando de necessário
areaDoTriangulo = function(base, altura) {
    area = (base*altura)/ 2
    if (area % 1 !== 0) {
        return area.toFixed(2)
    } else {
        return Math.ceil(area)
    }
}

console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))