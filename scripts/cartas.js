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




    });
}

function criaCartas(posicao) {
    switch (posicao) {
        case: 
    }
    
    
    const cartasEscolhiveis = document.querySelectorAll(".cartas-escolha");
    
    let vetor = [];
    for(let i = 0; i < jogadores[]; i++) {
        vetor[i] = Math.floor(Math.random() * (4 - 0) + 0);
    }
    
    for (let cartaEscolhivelAtual of cartasEscolhiveis) {
        
    }
}