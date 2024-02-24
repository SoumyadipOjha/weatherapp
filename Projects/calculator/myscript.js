const display = document.getElementById('display');
  function appendToDisplay(input) {
    display.value += input;
  }
  function emptyscreen() {
    display.value = "";
  }
  function calculate() {
    try {
      display.value = eval(display.value);
    }
    catch (Error) {
      display.value = "Error";
    }
  }