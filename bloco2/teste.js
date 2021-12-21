//M = C (1+i)t

const taxaFixa = 0.016;
const capital = 12000;
let montante;
const tempo = 4;

montante = 12000 * (Math.pow(1+taxaFixa,tempo));
console.log(montante.toFixed(2));
console.log()

const listaDeAlunos = ["Rua", "Jose", "Pedro", "Fabio"]

const acessoListasAlunos = senha => {
    if(senha === 325){
    for(let i = 0; i < listaDeAlunos.length; i++){
      console.log(listaDeAlunos[i])
    }
  }else{
     console.log("Senha incorreta.")
  }
}
console.log(acessoListasAlunos(325));
console.log()

const notas = [10 , 8, 9, 7]
notas.push(10)
console.log(notas)
notas.pop()
console.log(notas)
notas.unshift(5)
console.log(notas)

const acessoNotas = senha => {
    if(senha === 325){
        for(let i = 0; i < notas.length; i++){

            console.log(`A nota ${1+i} do aluno é ${notas[i]}.`)
        }
    }else{
        console.log("Chave de acesso incorreta.")
    }
}

console.log(acessoNotas(325))