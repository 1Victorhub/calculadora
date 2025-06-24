function append(char) {
  document.getElementById('display').value += char;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Erro';
  }
}

// Fórmulas animadas no fundo
const formulas = [
  "E = mc²", "F = ma", "Δx·Δp ≥ ħ/2", "∫F·ds = W", "V = IR",
  "λ = h/p", "PV = nRT", "∫B·dL = μ₀I", "d²x/dt² = -ω²x",
  "R = ρL/A", "F = G(m₁m₂)/r²", "ψ(x,t)", "∮E·dA = Q/ε₀", 
  "∮B·dA = 0", "∫e^x dx = e^x + C", "τ = Iα", "ΣF = ma"
];

function spawnFormula() {
  const formula = document.createElement('div');
  formula.className = 'formula';
  formula.innerText = formulas[Math.floor(Math.random() * formulas.length)];
  formula.style.top = `${Math.random() * 100}%`;
  formula.style.left = '100%';
  formula.style.animationDuration = `${10 + Math.random() * 10}s`;

  document.querySelector('.background').appendChild(formula);

  setTimeout(() => formula.remove(), 20000);
}

// Cria fórmulas a cada 800ms
setInterval(spawnFormula, 800);
