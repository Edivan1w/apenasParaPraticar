
function converteAnosEMesesEmDias(anos,meses){
  let convAnos = anos * 365;
  let convMeses = meses * 30;
  return console.log(convAnos,convMeses);
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Edivan",29))

converteAnosEMesesEmDias(29,3);