//aula355
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {} //comparações se o this aponta ou não para um objeto
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)