const listaAlunos = ['Joao', 'Pedro', 'Ana', 'Joana']
const listaNotas = [8, 9, 9, 7]
let alunosNotas = [listaAlunos, listaNotas]
const entradaDados = require('readline-sync')

const exibeNomeNota = () => {
    nomeAluno = entradaDados.question('Digite o nome do aluno: ')
    if(alunosNotas[0].includes(nomeAluno)){
        let indice = alunosNotas[0].indexOf(nomeAluno)
        return console.log(alunosNotas[0][indice] + ' sua média é ' +
        alunosNotas[1][indice])
    }else{
        return console('Aluno não cadastrado.')
    }
}
//includes -> devolve um boolean
//indexOf -> devolve o índice
//exibeNomeNota()
for(let i = 0; i < listaNotas.length; i++){
    console.log(i, listaNotas[i])
}