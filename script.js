let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  // Previne adicionar dois operadores seguidos
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    updateDisplay();
  }
}

function calculateResult() {
  try {
    // Substituir a porcentagem por operação de divisão por 100
    currentInput = currentInput.replace(/%/g, "/100");
    
    // Evitar erro em caso de sinais antes dos números
    if (currentInput[0] === '-' || currentInput[0] === '+') {
      currentInput = '0' + currentInput;
    }
    
    let result = eval(currentInput);
    
    // Arredonda o resultado e exibe na tela
    display.innerText = result.toFixed(2);
    currentInput = result.toFixed(2);
  } catch (e) {
    display.innerText = "Erro";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}   