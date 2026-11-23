
let num1 = Number(prompt("Birinchi son kiriting"))
let num2 = Number(prompt("Ikkinchi son kiriting"))
let operator = prompt("shu dan tanlang  +, -, *, /")
let result
switch (operator) {
  case "+":

    result = num1 + num2 
    break;
      case "-":

    result = num1 - num2 
    break;
      case "*":

    result = num1 * num2 
    break;
      case "/":

    result = num1 / num2 
    break;

  default:
    break;
}
alert("Javob:" + result)