let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha em número de 1 a 30');
}
textoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
        
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativa = `Você descubriu o número secreto em ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * 30 + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length // length comprimento

   if (quantidadeDeElementosNaLista == 5) {
        listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //include verificar
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //push inserir
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


