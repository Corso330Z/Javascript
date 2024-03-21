// 01. a) Escreva um programa que simule um jogo de adivinhação
// onde o usuário deve adivinhar um número aleatório entre 1 e 100.
// O programa deve fornecer dicas sobre se o número digitado é
// maior ou menor que o número aleatório. O jogo deve continuar até
// que o usuário adivinhe corretamente.
import pr from "readline-sync";

let nmDig;
let nmAlea = Math.floor(Math.random() * 100) + 1;

do {
    nmDig = pr.questionInt("Qual número, entre 1 e 100, você acha que é? ");
    if(nmDig < nmAlea) {
        console.log(`${nmDig} é menor que o número aleatório`)
    }
    else {
        console.log(`${nmDig} é maior que o número aleatório`)
    }
} while (nmDig != nmAlea);

console.log(`Parabéns! Você acertou o valor do número aleatório!`);