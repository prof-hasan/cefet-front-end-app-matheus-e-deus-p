const todos = document.querySelectorAll("#campo div");
const goleiro = document.querySelector("#gk");
const zagueiroA = document.querySelector("#zga");
const zagueiroB = document.querySelector("#zgb");
const lateralA = document.querySelector("#laa");
const lateralB = document.querySelector("#lab");
const volante = document.querySelector("#cdm");
const meioA= document.querySelector("#cma");
const meioB = document.querySelector("#cmb");
const pontaA = document.querySelector("#pe");
const pontaB = document.querySelector("#pd");
const atacante = document.querySelector("#at");
// Cartas Individuais ^
const cartasEl = document.querySelectorAll(".carta");
let cartaSelecionadaCampo = null;
let posicaoElGlobal = null;

overaisCartas = document.querySelector(".carta .overall");


const telaSelecaoEl = document.querySelector("#escolher-carta");

let overallTimeEl = 0;


for(let cartaAtual of cartasEl) {
    cartaAtual.addEventListener("click", function(e) {
        
        if (telaSelecaoEl.classList.contains("tela-selecionada")) {
            return;
        }
        
        const estaSelecionado = cartaAtual.classList.contains("selecionada");
        if (estaSelecionado) {
            return;
        }
        cartaSelecionadaCampo = cartaAtual;
        telaSelecaoEl.classList.remove('tela-nao-selecionada');        
        telaSelecaoEl.classList.add('tela-selecionada');
        telaSelecaoEl.style.display = "flex";

        const posicaoCarta = cartaAtual.querySelector('.posicao').textContent;
        criaCartas(posicaoCarta);



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
        case "le":
            posicaoEl = 2;
            break;
        case "ld":
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
            posicaoEl = 5;
            break;
        case "at":
            posicaoEl = 6;
            break;
    }
    
    posicaoElGlobal = posicaoEl;

    
    const cartasEscolhiveis = document.querySelectorAll(".cartas-escolha");

    // aleatoriza 5 digitos
    let vetor = [];
    for(let i = 0; vetor.length < 5; i++) {
        let tamanho = jogadores[posicaoEl].jogadoresPosicao.length;
        const numAleatorio = Math.floor(Math.random() * tamanho);
        if(!vetor.includes(numAleatorio)) {
            vetor.push(numAleatorio);
        }
    }
    
    for (let i =0 ; i < 5; i++) {
        const cartaEscolhivelAtual = cartasEscolhiveis[i];
        cartaEscolhivelAtual.style.display="auto";

        let overallEl = cartaEscolhivelAtual.querySelector('.overall');
        let posicaoCartaEl = cartaEscolhivelAtual.querySelector('.posicao');
        let bandeiraEl = cartaEscolhivelAtual.querySelector('.bandeira');
        let ligaEl = cartaEscolhivelAtual.querySelector('.liga');
        let fotoEl = cartaEscolhivelAtual.querySelector('.foto');
        let timeEl = cartaEscolhivelAtual.querySelector('.time');
        let nomeEl = cartaEscolhivelAtual.querySelector('.nome');
        // ^ cartas atuais 

        let j = jogadores[posicaoEl].jogadoresPosicao[vetor[i]];


        overallEl.innerHTML = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].overall;
        posicaoCartaEl.textContent = posicao;
        bandeiraEl.src = "https://flagsapi.com/"+jogadores[posicaoEl].jogadoresPosicao[vetor[i]].pais+"/flat/64.png"

        const bandeiraAtual = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].pais;
        if (bandeiraAtual === "GB") {
            let membroUK = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].uk;
            bandeiraEl.src = "imgs/"+membroUK+".svg"
        }

        timeEl.src = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].timeimg;
        fotoEl.src = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].foto;
        ligaEl.src = "imgs/"+jogadores[posicaoEl].jogadoresPosicao[vetor[i]].liga+".png";
        nomeEl.innerHTML = jogadores[posicaoEl].jogadoresPosicao[vetor[i]].nome;
        cartaEscolhivelAtual.style.display = "block";
        cartaEscolhivelAtual.style.backgroundImage = 'url("imgs/carta.png")';

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // transicaozinha daorinha :D

        cartaEscolhivelAtual.addEventListener('click', function(e) {
            colocaJogadorNoCampo(j);
            
        })


        
    }
}

function colocaJogadorNoCampo(jogador) {
    let lista = jogadores[posicaoElGlobal].jogadoresPosicao;

    let index = lista.findIndex(p => p.nome === jogador.nome);

    if (index !== -1) {
        lista.splice(index, 1);
    }
    
    
    
    if (!cartaSelecionadaCampo) return;
    cartaSelecionadaCampo.querySelector('.overall').textContent = jogador.overall;
    cartaSelecionadaCampo.querySelector('.liga').src = "imgs/"+jogador.liga+".png";
    cartaSelecionadaCampo.querySelector('.foto').src = jogador.foto;
    cartaSelecionadaCampo.querySelector('.bandeira').src = "https://flagsapi.com/"+jogador.pais+"/flat/64.png";
    const bandeiraEl = cartaSelecionadaCampo.querySelector('.bandeira');
    bandeiraEl.src = "https://flagsapi.com/" + jogador.pais + "/flat/64.png";

    const bandeiraAtual = jogador.pais;

    if (bandeiraAtual === "GB") {
        let membroUK = jogador.uk;
        bandeiraEl.src = "imgs/" + membroUK + ".svg";
    }

    cartaSelecionadaCampo.querySelector('.nome').textContent = jogador.nome;
    cartaSelecionadaCampo.querySelector('.time').src = jogador.timeimg



    telaSelecaoEl.classList.remove('tela-selecionada');
    telaSelecaoEl.classList.add('tela-nao-selecionada');
    cartaSelecionadaCampo.classList.add('selecionada');
    const cartas = document.querySelectorAll(".cartas-escolha");
    cartas.forEach(c => c.style.display = "none");
    cartaSelecionadaCampo.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


const estrelasTd = document.querySelectorAll(".estrelas");

function atualizaEstrela() {
    
}
