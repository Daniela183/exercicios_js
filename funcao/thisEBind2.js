//aula352
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { //dispara outra função a partir de um intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)    //invocação da função/método add caso não colocar self
}

new Pessoa