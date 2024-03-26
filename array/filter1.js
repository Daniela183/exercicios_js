//aula364
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
//retorna o array vazio
console.log(produtos.filter(function (p) {
    return false
}))

//retorna todo  o array sem filtragem
//    console.log(produtos.filter(function(p) {
//    return true
//}))
//retorna os produtos maiores que 2000
//    console.log(produtos.filter(function(p) {
//    return p.preco > 2000
//}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))