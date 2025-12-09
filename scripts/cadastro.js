const nome = document.querySelector("#nome-usuario");
const senha = document.querySelector("#senha-usuario");
const botaoAvanca = document.querySelector("#pronto");
const imgAtual = document.querySelector("#camisa-escolhida");

senha.addEventListener('input', function(e) {
    if (nome.value.trim() !== " " && senha.value.trim() !== " ") {
        botaoAvanca.style.display = "block"
    }
    else {
        botaoAvanca.style.display = "none"
    }
});


const imgEscolhida = null;
botaoAvanca.addEventListener('click', function(e) {
    imgEscolhida = imgAtual.src;
})