const peso1 = 1.0;
const peso2= Number('2.0');

console.log (peso1, peso2);
console.log (Number.isInteger(peso1));
console.log (Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 8.671;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
console.log (total);

const media = (total/(peso1 + peso2));

console.log (media.toFixed(2)) //mostrar número de casas decimais
console.log (media.toString(2)); //em binário
console.log (typeof media); //tipo do dado
console.log (typeof Number); //função

console.log (7/0);
