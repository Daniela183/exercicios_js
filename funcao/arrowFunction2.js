//aula354
function Pessoa() {
    this.idade = 0

    setInterval(() => { //arrow literal
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa