 const caixa = document.getElementById("caixa");
const botoes = caixa.querySelectorAll("button");
const botaoSim = document.getElementById("sim");

let tentativas = 0;
const maxTentativas = 3;

function moverCaixa() {
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;
  const caixaWidth = caixa.offsetWidth;
  const caixaHeight = caixa.offsetHeight;

  const randomX = Math.random() * (bodyWidth - caixaWidth);
  const randomY = Math.random() * (bodyHeight - caixaHeight);

  caixa.style.left = `${randomX}px`;
  caixa.style.top = `${randomY}px`;
}

botoes.forEach(botao => {
  botao.addEventListener("click", (event) => {
    if (tentativas < maxTentativas) {
      event.preventDefault();
      moverCaixa();
      tentativas++;
    } else {
      if (botao.id === "sim") {
        window.open("amor.html", "_blank"); // abre em nova guia
      }
    }
  });
});
