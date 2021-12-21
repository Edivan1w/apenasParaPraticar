const numeros = [10, 20, 15, 20,]

//const somaNumeros = numeros.reduce((acum , atual) => acum + atual,0)
//console.log(somaNumeros)

//const somaNumeros = numeros.reduce(function(acum, atual){
  //  return atual + acum
//},5)
//console.log(somaNumeros)
//function somaNumeros(acum, atual){
  //  return atual + acum
//}

//const resultadoDaSoma = numeros.reduce(somaNumeros,0)
//console.log(resultadoDaSoma)
//function multPor10(numero){
    //return numero - 10
//}

//const recebe = numeros.map(multPor10)
//console.log(recebe)
const somaNumeros = numeros.map(num => num + 10)
console.log(somaNumeros)

const nome = 'paulo'
console.log(nome.indexOf('a'))

const novoNome = nome[0].toUpperCase()
console.log(novoNome)