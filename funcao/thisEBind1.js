//aula351
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()  //conflito entre paradigma funcional e orientado objeto
const falar = pessoa.falar
falar() 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()