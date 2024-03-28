// 02. Crie uma função que receba um número como
// parâmetro e verifique se ele é par ou ímpar. Retorne uma
// string.
function verifique(n) {
    return n % 2 == 0 ? "Par" : "Ímpar";
};
console.log(verifique(8));
console.log(verifique(9));