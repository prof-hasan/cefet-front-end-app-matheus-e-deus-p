const db = window.db;
import { doc, getDoc }
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const nomeLogin = document.getElementById("nome-usuario");
const senhaLogin = document.getElementById("senha-usuario");
const botaoLogin = document.getElementById("avanca-button");

botaoLogin.addEventListener("click", async () => {
    const ref = doc(db, "usuarios", nomeLogin.value.trim());
    const snap = await getDoc(ref);

    if (!snap.exists()) {
        alert("Usuário não encontrado!");
        return;
    }

    const data = snap.data();

    if (data.senha !== senhaLogin.value.trim()) {
        alert("Senha incorreta!");
        return;
    }

    alert("Login OK!");
    localStorage.setItem("usuario", nomeLogin.value.trim());
    window.location.href = "index.html"; 
});

