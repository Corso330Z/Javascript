import pr from "readline-sync";

// 01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.
// let nm1 = 1;
// let nm2 = 1;
// let n;

// for (let nm = 1; nm <= 20; nm++) {
//     console.log(`O ${nm}º da sequencia é: ${nm2}`);
//     n = nm1 + nm2;
//     nm1 = nm2;
//     nm2 = n;
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

for (let pessoas = 1; pessoas <= 10; pessoas++) {
    nome = pr.question("Digite seu nome: ");
    salario = pr.questionFloat("Digite seu salário bruto: ");

    if (salario <= 2100) {
        console.log(`${pessoas}. ${nome} - insento`);
    }
    else if (salario <= 2800) {
        vlr_imposto = salario * 0.075;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario <= 3750) {
        vlr_imposto = salario * 0.15;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario <= 4660) {
        vlr_imposto = salario * 0.225;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
    else if (salario >= 4660) {
        vlr_imposto = salario * 0.275;
        console.log(`${pessoas}. ${nome} - R$${vlr_imposto.toFixed(2)}`);
    }
}