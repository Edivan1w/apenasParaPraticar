

imprimeTexto(permitirEntrada());

//declaração de função
// ESTA É A PRIMEIRA FORMA
function imprimeTexto(texto){
    console.log(texto);
}

function permitirEntrada(){
    const permicao = 18;
    const idade = 15;
    if(idade >= permicao){
       return console.log("acesso permitido")
    }else{
       return console.log("acesso negado")
    }

}



console.log(Math.round(5.6))
console.log(Math.ceil(5.1))
console.log(Math.pow(3,3))