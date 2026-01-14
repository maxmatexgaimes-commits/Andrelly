const paginas = document.querySelectorAll(".pagina");
let atual = 0;

const inicio = new Date("2025-09-11T00:00:00");

function abrirLivro() {
  const musica = document.getElementById("musica");
  musica.volume = 0.6;
  musica.play().catch(() => {
    console.log("Clique necessário para tocar áudio");
  });

  criarSakura();
  virar();
}

function virar() {
  paginas[atual].classList.add("virando");
  setTimeout(() => {
    paginas[atual].classList.remove("ativa", "virando");
    atual++;
    if (atual < paginas.length) {
      paginas[atual].classList.add("ativa");
    }
  }, 900);
}

function criarSakura() {
  setInterval(() => {
    const flor = document.createElement("div");
    flor.innerText = "🌸";
    flor.style.position = "fixed";
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = "-5%";
    flor.style.fontSize = "20px";
    flor.style.animation = "cair 8s linear";
    document.body.appendChild(flor);
    setTimeout(() => flor.remove(), 8000);
  }, 250);
}

setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const t = document.getElementById("tempo");
  if (t) t.innerText = `Estamos juntos há ${h}h ${m}m ${s}s 💕`;
}, 1000);