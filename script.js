const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para preencher a janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

// Função para criar distorções geométricas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < 500; i++) {
    const angle = i * 0.1 + time * 0.05;
    const radius = 100 + i * 0.5 * Math.sin(time * 0.02);

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, Math.abs(Math.sin(time * 0.03) * 10), 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${(i * 10 + time) % 360}, 70%, 50%)`;
    ctx.fill();
    ctx.closePath();
  }

  time += 1;

  requestAnimationFrame(draw);
}

// Inicia a animação
draw();

// Ajusta o canvas ao redimensionar a janela
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
