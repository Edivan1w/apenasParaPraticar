//arrow funcion com uma linha
const adicionaNome = nome => `meu nome é ${nome}.`
console.log(adicionaNome("edivan"));

//arrow funcion com mais de uma linha
const somaNumeros = (num1,num2) => {
    if(num1 || num2 > 9){
        return "Somente números de 1 a 9."
    }else{
        return num1 + num2;
    }
}
console.log(somaNumeros(10,3));