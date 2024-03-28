import pr from "readline-sync";

// 01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.
// let nmAnterior = 0;
// let nmAtual = 1;
// let nmProximo;

// console.log(nmAnterior);
// console.log(nmAtual);
// for (let nm = 3; nm <= 20; nm++) {
//     console.log(nmAtual);
//     nmProximo = nmAnterior + nmAtual;
//     nmAnterior = nmAtual;
//     nmAtual = nmProximo;
// }


// 02. Crie um algoritmo que leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
// valor de imposto de renda a ser pago.

// Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
// Salário <= R$ 2.100,00 = isento
// Salário <= R$ 2.800,00 = 7,5%
// Salário <= R$ 3.750,00 = 15%
// Salário <= R$ 4.660,00 = 22.5%
// Salário > R$ 4.660,00 = 27.5%

let nome;
let salario;
let vlr_imposto = 0;
let diferenca = 0;

for (let pessoas = 1; pessoas <= 10; pessoas++) {
    nome = pr.question("Digite seu nome: ");
    salario = pr.questionFloat("Digite seu salário bruto: ");

    if (salario <= 2100) {
        console.log(`${pessoas}. ${nome} - insento`);
    }
    else if (salario <= 2800) {
        diferenca = salario - 2100;
        vlr_imposto = diferenca * 0.075;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario <= 3750) {
        diferenca = salario - 2800
        vlr_imposto = diferenca * 0.15;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario <= 4660) {
        diferenca = salario - 3750
        vlr_imposto = diferenca * 0.225;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario >= 4660) {
        diferenca = salario - 4660
        vlr_imposto = diferenca * 0.275;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
}