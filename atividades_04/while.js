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
let mediaTurma = 0;
let somaMedia = 0

while (alunosTurma >= ct) {
    console.log(`Digite a nota de cada bimestre do ${ct}º aluno`);
    let contadorBimestres = 1;
    let somaNotas = 0;

    while (contadorBimestres <= 4) {
        let notas = pergunta.questionFloat(`Digite a nota do ${contadorBimestres}ºB: `);
        somaNotas += notas;
        contadorBimestres++;
    }
    
    let mediaAluno = somaNotas/4;
    console.log(`A média anual do ${ct}º aluno foi de ${mediaAluno.toFixed(2)}`);
    ct++;
    somaMedia += mediaAluno
    mediaTurma = somaMedia/alunosTurma
}
console.log(`A média geral da turma foi de ${mediaTurma.toFixed(2)}`)