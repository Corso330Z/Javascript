// Solicite ao usuário para inserir um número representando um dia da
// semana (1 a 7) e mostre o nome do dia correspondente.
import dados from "readline-sync";

 let dia = dados.questionInt("Digite um número representando um dia da semana: ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
        break;
}
