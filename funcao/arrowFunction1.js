//aula353
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //returo implícito/única coisa
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //sem parâmetro
ola = _ => 'Olá' //possui um parâmetro
console.log(ola())