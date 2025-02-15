//aula367
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//desafio 1: todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

//desafio 3 'meu': quais são os alunos bolsistas
const bolsista = (resultado, bolsista) =>  resultado ? resultado : bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsista))

//desafio 4 'meu': mostra o array true e false
const array = (resultado, bolsista) =>  resultado ? resultado : bolsista
console.log(alunos.map(a => a.bolsista))