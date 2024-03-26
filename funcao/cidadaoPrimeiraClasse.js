//aula348
//Função em JS é First-Class Object (Citizens)
//função de alta ordem

function fun1() { } //criar de forma literal

const fun2 = function () { }    //armazena em variável

const array = [function (a, b) { return a + b }, fun1, fun2]    //armazena em array
console.log(array[0](2, 3))

const obj = {}  //armazena um atributo de objeto
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

function run(fun) { //passa a função como parâmetro
    fun()
}

run(function () { console.log('Executando...') })

function soma(a, b) {   //uma função retorna ou tem uma função
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //soma(2, 3, 4)
const cincoMais = soma(2, 3)
cincoMais(4)