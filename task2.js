function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}
