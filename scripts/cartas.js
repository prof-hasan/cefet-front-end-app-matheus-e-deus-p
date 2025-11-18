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
const zagueirosEl = document.querySelectorAll(".zagueirosEl");
const meiosEl = document.qu

for(let cartaAtual of cartasEl) {
    const estaSelecionado = cartaAtual.classList.contains(selecionada)
    cartaAtual.addEventListener("click", function(e) {
        if (estaSelecionado) {
            return;
        }
        
    });
}

function criaCartas("posicao") {

}