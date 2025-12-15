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
let jogadoresNoTime = new Set();


const overaisCartas = document.querySelector(".carta .overall");


const telaSelecaoEl = document.querySelector("#escolher-carta");

let entrosaTimeEl = 0;
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

        cartaEscolhivelAtual.onclick = function () {
            colocaJogadorNoCampo(j);
        };



        
    }
}

function colocaJogadorNoCampo(jogador) {
    jogador.posicao = cartaSelecionadaCampo
    .querySelector('.posicao')
    .textContent;
    
    let lista = jogadores[posicaoElGlobal].jogadoresPosicao;

    let index = lista.findIndex(p => p.nome === jogador.nome);

    if (index !== -1) {
        lista.splice(index, 1);
    }
    
    
    
    
    if (!cartaSelecionadaCampo) return;

    if (cartaSelecionadaCampo.classList.contains("selecionada")) {
    const overallAntigo = Number(
        cartaSelecionadaCampo.querySelector(".overall").textContent
    );
    overallTimeEl -= overallAntigo;
    }

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
    cartaSelecionadaCampo.querySelector('.time').src = jogador.timeimg;



    telaSelecaoEl.classList.remove('tela-selecionada');
    telaSelecaoEl.classList.add('tela-nao-selecionada');
    cartaSelecionadaCampo.classList.add('selecionada');
    const cartas = document.querySelectorAll(".cartas-escolha");
    cartas.forEach(c => c.style.display = "none");
    cartaSelecionadaCampo.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    overallTimeEl += Number(jogador.overall);
    atualizaEstrela();
    if (jogadoresNoTime.has(jogador)) return;
    jogadoresNoTime.add(jogador);
    entrosamento("pais", jogador);
    entrosamento("time", jogador);
    entrosamento("liga", jogador);
    atualizarEntrosamentoGeral();
    salvarTime();
}

function calculaMediaTime() {
    let soma = 0;
    let qtd = 0;

    document.querySelectorAll(".carta.selecionada").forEach(c => {
        soma += Number(c.querySelector(".overall").textContent);
        qtd++;
    });

    if (qtd === 0) return 0;
    return soma / qtd;
}


const estrelasTd = document.querySelectorAll(".estrelas");
const estrelaUmEl = document.querySelector("#estrela1");
const estrelaDoisEl = document.querySelector("#estrela2");
const estrelaTresEl = document.querySelector("#estrela3");
const estrelaQuatroEl = document.querySelector("#estrela4");
const estrelaCincoEl = document.querySelector("#estrela5");

function atualizaEstrela() {
    let media = calculaMediaTime();

    
    const estrelasVetor = [estrelaUmEl, estrelaDoisEl, estrelaTresEl, estrelaQuatroEl, estrelaCincoEl];
    estrelasVetor.forEach(e => e.src = "imgs/estrelavazia.png");

    
    let estrelas = (media - 70) / 4;


    if (estrelas < 0) estrelas = 0;
    if (estrelas > 5) estrelas = 5;

    estrelas = Math.round(estrelas * 2) / 2;

    
    const cheias = Math.floor(estrelas);
    
    for (let i = 0; i < cheias; i++) {
        estrelasVetor[i].src = "imgs/estrelacheia.png";
    }

    
    if (estrelas % 1 !== 0) {
        estrelasVetor[cheias].src = "imgs/estrelameia.png";
    }
    atualizaOverGeral(media);
}

const btnEntrosa = document.querySelector("#entrosa-btn");
const barraEntrosa = document.querySelector("#entrosamento-painel");
const btnFechar = document.querySelector("#fecha-entrosa");

btnEntrosa.addEventListener('click', function(e) {
    barraEntrosa.classList.add('ativa');
})

btnFechar.addEventListener('click', function(e) {
    barraEntrosa.classList.remove('ativa');
})

let mapaEntrosamento = {
    pais: {},
    liga: {},
    time: {},
};


function entrosamento(tipo, jogador) {
    const valor = jogador[tipo];
    const mapa = mapaEntrosamento[tipo];

    if (!mapa[valor]) {
        criaItem(tipo, jogador, valor);
    }

    adicionarMarcacao(tipo, valor);
}


function criaItem(tipo, jogador, valor) {
    const secaoModificada = document.querySelector(`#${tipo}`);
    const divCriada = document.createElement('div');
    divCriada.className = `${tipo}-pagina`;
    const img = document.createElement('img');
    let tp = 0;
    switch (tipo) {
        case "pais":
            img.src = "https://flagsapi.com/" + jogador.pais + "/flat/64.png";
            tp = 1;
            break;
        case "liga":
            img.src = `imgs/${jogador.liga}.png`;
            tp = 2;
            break;
        case "time":
            img.src = jogador.timeimg;
            tp = 3;
            break;
        default:
            alert('bugou ai pae');
    }

    const marcacoes = document.createElement("div");
    marcacoes.className = "marcacoes";

    secaoModificada.appendChild(divCriada);
    divCriada.appendChild(img);
    divCriada.appendChild(marcacoes);

    mapaEntrosamento[tipo][valor] = {
        container: marcacoes,
        total: 0
    };
    
}


function adicionarMarcacao(tipo, valor) {
  const item = mapaEntrosamento[tipo][valor];
  if (item.total >= 3) return;

  const marc = document.createElement("div");
  marc.className = "bola-entrosa";
  item.container.appendChild(marc);

  item.total++;
}

function atualizarEntrosamentoGeral() {
    const total = calcularEntrosamentoTime();
    document.getElementById("entrosamento-total").textContent = total;
        console.log("Usuario logado:", localStorage.getItem("usuario"));

}

function calcularEntrosamentoTime() {
  const jogadores = Array.from(jogadoresNoTime);
  let entrosamento = 0;

  for (let i = 0; i < jogadores.length; i++) {
    for (let j = i + 1; j < jogadores.length; j++) {
      if (jogadores[i].pais === jogadores[j].pais) entrosamento+=2;
      if (jogadores[i].liga === jogadores[j].liga) entrosamento+=1;
      if (jogadores[i].time === jogadores[j].time) entrosamento+=3;
    }
  }

  return entrosamento;
}


function atualizaOverGeral(over) {
    const h3Mudado = document.querySelector("#overallQntd");
    h3Mudado.textContent = Math.floor(over)
}


// Salvar o time :D




import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
            apiKey: "AIzaSyBUCalDFTxqK1SaDEeuuTnVPXtHuqI80PE",
            authDomain: "dados---dream-team.firebaseapp.com",
            projectId: "dados---dream-team",
            storageBucket: "dados---dream-team.firebasestorage.app",
            messagingSenderId: "151945803722",
            appId: "1:151945803722:web:b070fccaf4f9a1549e4133",
            measurementId: "G-68WG6DQ1VC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



async function salvarTime() {
    const usuarioLogado = localStorage.getItem("usuario"); 
    if (!usuarioLogado) return;

    // cria um array apenas com os dados essenciais
    const jogadoresArray = Array.from(jogadoresNoTime).map(c => ({
        nome: c.nome || "",
        posicao: c.posicao,
        overall: Number(c.overall) || 0,
        liga: c.liga || "",
        pais: c.pais || "",
        timeimg: c.timeimg || "",
        foto: c.foto || ""
    }));

    await setDoc(doc(db, "usuarios", usuarioLogado, "time", "atual"), {
        overall: overallTimeEl || 0,
        entrosamento: Number(document.getElementById("entrosamento-total").textContent) || 0,
        jogadores: jogadoresArray
    });
}


async function carregarTime() {
    
    const usuarioLogado = localStorage.getItem("usuario");
    if (!usuarioLogado) return; 

    const ref = doc(db, "usuarios", usuarioLogado, "time", "atual");
    const snap = await getDoc(ref);

    if (!snap.exists()) return; 

    const data = snap.data();
    overallTimeEl = data.overall;
    document.getElementById("entrosamento-total").textContent = data.entrosamento;

    data.jogadores.forEach(j => {

    let posEl;
    switch (j.posicao) {
        case "gk": posEl = 0; break;
        case "zg": posEl = 1; break;
        case "le": posEl = 2; break;
        case "ld": posEl = 2; break;
        case "cdm": posEl = 3; break;
        case "cm": posEl = 4; break;
        case "pe": posEl = 5; break;
        case "pd": posEl = 5; break;
        case "at": posEl = 6; break;
        default: return;
    }

    const jogadorOriginal = jogadores[posEl]?.jogadoresPosicao
        ?.find(orig => orig.nome === j.nome);
    if (!jogadorOriginal) return;

    let cartaCampo = Array.from(todos).find(c =>
        c.querySelector(".posicao").textContent === j.posicao &&
        !c.classList.contains("selecionada")
    );

    if (!cartaCampo) return;

    cartaCampo.querySelector(".overall").textContent = jogadorOriginal.overall;
    cartaCampo.querySelector(".liga").src = "imgs/" + jogadorOriginal.liga + ".png";
    cartaCampo.querySelector(".foto").src = jogadorOriginal.foto;
    cartaCampo.querySelector(".bandeira").src =
        jogadorOriginal.pais === "GB"
            ? "imgs/" + jogadorOriginal.uk + ".svg"
            : "https://flagsapi.com/" + jogadorOriginal.pais + "/flat/64.png";
    cartaCampo.querySelector(".nome").textContent = jogadorOriginal.nome;
    cartaCampo.querySelector(".time").src = jogadorOriginal.timeimg;
    cartaCampo.classList.add("selecionada");

    jogadoresNoTime.add(jogadorOriginal);
    entrosamento("pais", jogadorOriginal);
    entrosamento("liga", jogadorOriginal);
    entrosamento("time", jogadorOriginal);
    atualizaEstrela();
    atualizarEntrosamentoGeral();
});
}
    

    
    



window.addEventListener('load', carregarTime);
