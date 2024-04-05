function fun1 () { } //forma literal

const fun2 = function () { } //dentro de uma variável

const array = [function(a, b) {return a + b}, fun1, fun2] //armazenando em um array
console.log(array[0] (2, 3))

const obj = {} //armazenando em um atributo de objeto
obj.falar = function() {return 'opa'}
console.log(obj.falar())

function run(fun) { //passando função como parametro
    fun()
}
run(function () { console.log('Executando...')})

