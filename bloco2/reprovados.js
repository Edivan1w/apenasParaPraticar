const alunos = ['Joao', 'Ana', 'Maria', 'Leticia']
const notas = [7, 8, 4, 6]
const reprovados = alunos.filter((nome,indice) =>
  notas[indice] < 7)
 // console.log(`lista de Reprovados: ${reprovados}`)

  const nomes =  ['Joao', 'Ana', 'Maria', 'Leticia']
  const notasAlunos = [7, 8, 4, 6]

  const reprova = nomes.filter((nome, indice) => notasAlunos[indice] < 7)
  console.log(`reprovados: ${reprova}`)

  const aprovado = nomes.filter((nota, indice) => notasAlunos[indice] >= 7)
       
    
  console.log(aprovado)