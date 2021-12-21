//removendo o último indice
const notas = [90, 80.5, 70.8, 70]
notas.pop()
notas.unshift(50)
console.log(notas.length)
console.log(notas)
let media = (notas[0] + notas[1] + notas[2])/notas.length
console.log(`A média do aluno é ${media}.`)





