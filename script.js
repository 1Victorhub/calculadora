
const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// Efeitos de fundo com fórmulas
const canvas = document.getElementById("formulas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const formulas = [
  "E = mc²", "a² + b² = c²", "Δx = v₀t + ½at²",
  "F = ma", "V = IR", "PV = nRT", "∑F = 0", "ω = 2πf", "E = hf"
];

function randomFormula() {
  return formulas[Math.floor(Math.random() * formulas.length)];
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Arial";
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillText(randomFormula(), x, y);
  }
}
setInterval(draw, 2000);
