const javaJS = [100, 90, 100, 90]
const java = [80, 10, 70, 90]
const pyton = [60, 70, 10, 90]

function meidaGeral(notasSalas){
   const soma = notasSalas.reduce((acum, atual) => 
   atual + acum,0)
   return soma/notasSalas.length
   }
   console.log(meidaGeral(javaJS))