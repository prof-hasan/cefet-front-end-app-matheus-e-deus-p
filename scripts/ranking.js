console.log("ranking.js carregou");

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUCalDFTxqK1SaDEeuuTnVPXtHuqI80PE",
  authDomain: "dados---dream-team.firebaseapp.com",
  projectId: "dados---dream-team",
  storageBucket: "dados---dream-team.firebasestorage.app",
  messagingSenderId: "151945803722",
  appId: "1:151945803722:web:b070fccaf4f9a1549e4133"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ul = document.getElementById("ranking");

onSnapshot(collection(db, "usuarios"), async (snapshot) => {
  const ranking = [];

  for (const userDoc of snapshot.docs) {
    const user = userDoc.data();

    const timeRef = doc(db, "usuarios", userDoc.id, "time", "atual");
    const timeSnap = await getDoc(timeRef);

    if (!timeSnap.exists()) continue;

    const time = timeSnap.data();

    const overall = Math.round((time.overall || 0) / 11);
    const entrosamento = time.entrosamento || 0;
    const soma = overall + entrosamento;

    ranking.push({
      nome: user.nome || userDoc.id,
      camisa: user.camisa || "#999",
      numero: user.numerocamisa || "",
      overall,
      entrosamento,
      soma
    });
  }

  ranking.sort((a, b) => b.soma - a.soma);
  renderRanking(ranking);
});

function renderRanking(lista) {
  ul.innerHTML = "";

  lista.forEach((r, i) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="camisa-ranking">
        <div class="cor-camisa-ranking" style="background:${r.camisa}"></div>
        <span class="numero-camisa">${r.numero}</span>
      </div>

      <strong>${i + 1}º</strong>
      ${r.nome} —
      <b>${r.soma}</b>
    `;

    ul.appendChild(li);
  });
}
