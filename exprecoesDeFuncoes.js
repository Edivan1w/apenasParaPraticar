// declaração de função
function multiplica(num1,num2){
    return num1 * num2;
}
multiplica(10,5);


//EXPREÇÕES DE FUNÇÕES
//NÃO É POSSIVEL CHAMAR ESSA EXPRESSÃO ANTES DA DECLARAÇÃO
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(3,5))