const entradaDados = require('readline-sync');
let escolhaOutraCadeira;
let escolhaMaisCadeira;

const fileira = ['disponivel', 'disponivel', 'disponivel', 'disponivel', 'disponivel', 
                 'disponivel', 'disponivel', 'disponivel', 'disponivel', 'disponivel']
let numeroCadeira;

const mostraFileira = (array1) => {
    let i;
    
    for(i = 0; i <= 9; i++){
    if(array1[i] === 'disponivel'){
      console.log(`[ C: ${i} ]`)
    }else{
      array1[i] = "[ cadeira já reservada ]"
      console.log(array1[i])
    }
}
}

const reservaCadeira = (array2)=> {
    
    mostraFileira(array2)
    const escolhaCadeira = entradaDados.question('Escolha o numero da cadeira na fileira c . ')
    if(array2[escolhaCadeira] === 'disponivel'){
        array2[escolhaCadeira] = "reservado"
            console.log(`reserva efetuada com sucesso.`)
        }else{
            console.log('Esta cadeira está ocupada.')
            reservaCadeira(array2)
        }
        let escolhaOutraCadeira = entradaDados.question('quer reservar outra cadeira: S/N ')
        
        if(escolhaOutraCadeira == 'S'){
            reservaCadeira(array2)
        }else if(escolhaOutraCadeira == 'N'){
            console.log('Obrigado pela preferencia.')
        }else{
            console.log('ERROR: digite o comando correto.')
        }

}

reservaCadeira(fileira)