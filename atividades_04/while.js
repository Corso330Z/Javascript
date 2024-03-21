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
let alunosTurma = pergunta.questionInt("Quantos alunos tem na turma? ");
let ct = 1;
let mediaAluno = 0;
let mediaTurma = 0;
let somaMedia = 0
while (alunosTurma >= ct) {
    console.log(`Digite a nota de cada bimestre do ${ct}º aluno`);
    let b1 = pergunta.questionFloat("Digite a nota do 1ºB: ");
    let b2 = pergunta.questionFloat("Digite a nota do 2ºB: ");
    let b3 = pergunta.questionFloat("Digite a nota do 3ºB: ");
    let b4 = pergunta.questionFloat("Digite a nota do 4ºB: ");
    mediaAluno = (b1+b2+b3+b4)/4;
    console.log(`A média anual do ${ct}º aluno foi de ${mediaAluno.toFixed(2)}`);
    ct++;
    somaMedia += mediaAluno
    mediaTurma = somaMedia/alunosTurma
}
console.log(`A média geral da turma foi de ${mediaTurma.toFixed(2)}`)