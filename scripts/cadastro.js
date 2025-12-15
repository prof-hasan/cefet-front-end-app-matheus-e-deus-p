
const db = window.db;

import { doc, setDoc }
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const nome = document.querySelector("#nome-usuario");
const senha = document.querySelector("#senha-usuario");
const botaoAvanca = document.querySelector("#pronto");
const numeroCamisaEl = document.querySelector("#numero-camisa");
const numeroCamisaInput = document.querySelector("#numero-camisa-input");
const corCamisaInput = document.querySelector("#escolhe-cor-camisa");
const corCamisa = document.querySelector("#cor-camisa");

function atualizaBotao() {
    botaoAvanca.style.display =
        nome.value.trim() !== "" && senha.value.trim() !== ""
            ? "block" : "none";
}

nome.addEventListener("input", atualizaBotao);
senha.addEventListener("input", atualizaBotao);

numeroCamisaInput.addEventListener('input', () => {
  numeroCamisaEl.textContent = numeroCamisaInput.value;
})

corCamisaInput.addEventListener('input', () => {
  corCamisa.style.backgroundColor = corCamisaInput.value;
})

botaoAvanca.addEventListener("click", async () => {
  if (nome.value.trim() === "" || senha.value.trim() === "") {
    alert("Preencha nome e senha!");
    return;
  }
  
  
  await setDoc(doc(db, "usuarios", nome.value), {
        nome: nome.value.trim(),
        senha: senha.value.trim(),
        camisa: corCamisaInput.value,
        numerocamisa: numeroCamisaInput.value.trim()
    });

    alert("Cadastro salvo!");

    window.location.href = "login.html";
});
