// Implementar um programa que simule uma calculadora. O usuário deverá
// informar dois valores e a operação desejada.
// Com auxílio de um switch deve ser computado e mostrado o resultado da
// operação.
import cal from "readline-sync";

let x = cal.questionFloat("Digite o primeiro número: ")
let y = cal.questionFloat("Digite o segundo número: ")
let operação = cal.question("Digite a operação desejada entre as opções (+ - * / ^): ")

switch (operação) {
    case "+":
        console.log(`${x + y}`)
        break;
    case "-":
        console.log(`${x - y}`)
        break;
    case "*":
        console.log(`${x * y}`)
        break;
    case "/":
        console.log(`${x / y}`)
        break;
    default:
        console.log(`Operação inválida!`)
        break;
}