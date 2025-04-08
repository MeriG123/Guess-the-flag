// Simulação dos dados de resultado
const resultados = [
    { nome: "X1", pontos: 120, tempo: "45s" },
    { nome: "X2", pontos: 115, tempo: "48s" },
    { nome: "X3", pontos: 110, tempo: "50s" },
    { nome: "X4", pontos: 105, tempo: "55s" },
    { nome: "X5", pontos: 100, tempo: "60s" },
  ];
  
  function exibirResultados() {
    const container = document.getElementById("scoreboard");
    resultados.forEach((jogador, index) => {
      const div = document.createElement("div");
      div.textContent = `${index + 1} ${jogador.nome} (${jogador.pontos} pontos - tempo ${jogador.tempo})`;
      container.appendChild(div);
    });
  }
  
  function voltarMenu() {
    // Substitua com o redirecionamento real do seu jogo
    window.location.href = "index.html";
  }
  
  window.onload = exibirResultados;
  