const notas1 = [10, 8, 8, 10]
const notas2 = [8, 6, 7, 4]
const notas3 = [7, 8, 10, 9]
const notasGerais = [notas1, notas2, notas3]
let media = 0
let soma = 0
for(let i = 0; i < notasGerais.length; i++){
    for(let j = 0; j < notasGerais[i].length; j++){
        media += notasGerais[i][j]/notasGerais[i].length
    }
  
}

media = media/notasGerais.length
console.log(media)