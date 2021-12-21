const notas = [10, 8 , 8, 10]
let soma = 0
let media = 0 

//FUNÇÃO CALLBACK
//é obrigatorio ter uma função como parâmetro
 notas.forEach( nota => {
    soma += nota
 } )
 
 media = soma/notas.length
 console.log(media)
 
//FUNÇÃO CALLBACK
// com map
const notasAtualizadas = notas.map(notaNova => notaNova == 10 ? notaNova : ++notaNova) 

console.log(notasAtualizadas)
