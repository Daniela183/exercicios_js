//aula361
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {  //for com propósito
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10  //soma + 10
const triplo = e => e * 3   //multiplica por 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //elemento para reais

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)