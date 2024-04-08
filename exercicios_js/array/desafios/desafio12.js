// crie uma function que receba um array e retorne um array somente com os números presentes do array recebido como parametro
function filtrarNumeros (elementos){ 
    return elementos.filter(function(elemento){
        return typeof elemento === "number"
    })
}
console.log(filtrarNumeros(["Java", 1, "3", "Web", 20]))