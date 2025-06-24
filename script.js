function append(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (e) {
    document.getElementById("display").value = "Erro";
  }
}

function toggleMode() {
  const body = document.body;
  const isDark = body.classList.contains("dark-mode");
  body.classList.toggle("dark-mode", !isDark);
  body.classList.toggle("light-mode", isDark);
  document.querySelector(".toggle-mode").textContent = isDark ? "☀️" : "🌙";
}
