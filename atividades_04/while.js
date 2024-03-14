import pergunta from "readline-sync";

// 01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
// imprima a tabuada desse número usando um loop while.
// let num = pergunta.questionInt("Digite um número: ");
// let cont = 0;
// while (cont <= 10) {
//     console.log(`${num} x ${cont} = ${num * cont}`);
//     cont++;
// }

// 02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
// alunos.
// O Programa deverá:
// Ler o número de alunos da turma;
// Ler as notas dos 4 bimestres de cada aluno;
// Calcular e imprimir a média do aluno;
// Calcular e imprimir a média da turma.
let turma = pergunta.questionInt("Quantos alunos tem na turma? ");
let ct = 1;
while (ct <= turma) {
    let aluno = [
        {nota1: pergunta.questionFloat("Digite a nota do 1ºB do : ")},
        {nota2: pergunta.questionFloat("Digite a nota do 2ºB: ")},
        {nota3: pergunta.questionFloat("Digite a nota do 3ºB: ")},
        {nota4: pergunta.questionFloat("Digite a nota do 4ºB: ")},
    ];
}


