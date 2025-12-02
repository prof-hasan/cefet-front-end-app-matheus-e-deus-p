const todos = document.querySelectorAll("#campo div");
const goleiro = document.querySelector("#gk");
const zagueiroA = document.querySelector("#zga");
const zagueiroB = document.querySelector("#zgb");
const lateralA = document.querySelector("#laa");
const lateralB = document.querySelector("#lab");
const volante = document.querySelector("#cmd");
const meioA= document.querySelector("#cma");
const meioB = document.querySelector("#cmb");
const pontaA = document.querySelector("#pe");
const pontaB = document.querySelector("#pd");
const atacante = document.querySelector("#at");
// Cartas Individuais ^
const cartasEl = document.querySelectorAll(".carta");


const telaSelecaoEl = document.querySelector("#escolher-carta");

for(let cartaAtual of cartasEl) {
    cartaAtual.addEventListener("click", function(e) {
            
        const estaSelecionado = cartaAtual.classList.contains("selecionada");
        if (estaSelecionado) {
            return;
        }
        telaSelecaoEl.classList.remove('tela-nao-selecionada');        
        telaSelecaoEl.classList.add('tela-selecionada');

        const posicaoCarta = cartaAtual.querySelector('.posicao').textContent;
        criaCartas(posicao);



    });
}

function criaCartas(posicao) {
    let posicaoEl;
    switch (posicao) {
        case "gk":
            posicaoEl = 0;
            break;
        case "zg":
            posicaoEl = 1;
            break;
        case "lat":
            posicaoEl = 2;
            break;
        case "cdm":
            posicaoEl = 3;
            break;
        case "cm":
            posicaoEl = 4;
            break;
        case "pe":
            posicaoEl = 5;
            break;
        case "pd":
            posicaoEl = 6;
            break;
        case "ata":
            posicaoEl = 7;
            break;
    }
    
    
    const cartasEscolhiveis = document.querySelectorAll(".cartas-escolha");

    // aleatoriza 5 digitos
    let vetor = [];
    for(let i = 0; vetor.length < 5; i++) {
        let tamanho = jogadores[posicaoEl].jogadoresPosicao.length;
        const numAleatorio = Math.floor(Math.random() * tamanho) + 1;
        if(!resultado.includes(numAleatorio)) {
            vetor.push(numAleatorio);
        }
    }
    
    for (let i =0 ; i < 5; i++) {
        let overallEl = cartaEscolhivelAtual.querySelector('.overall');
        let posicaoEl = cartaEscolhivelAtual.querySelector('.posicao');
        let bandeiraEl = cartaEscolhivelAtual.querySelector('.bandeira');
        let ligaEl = cartaEscolhivelAtual.querySelector('.liga');
        let fotoEl = cartaEscolhivelAtual.querySelector('.foto');
        let timeEl = cartaEscolhivelAtual.querySelector('.time');
        let nomeEl = cartaEscolhivelAtual.querySelector('.nome');
        // ^ cartas atuais 
        overallEl.innerHTML = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].overall;
        posicaoEl.innerHTML = posicao;
        bandeiraEl.src = "https://flagsapi.com/"+jogadores[posicaoEl].jogadoresPosicao[vetor[i]].pais+"/flat/64.png"
        timeEl.innerHTML = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].time;
        fotoEl.src = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].foto;
        cartaEscolhivelAtual.style.backgroundImage = url("imgs/"))
    }
}