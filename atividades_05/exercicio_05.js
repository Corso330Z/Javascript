// 05. Desenvolva uma função que calcule o valor de um
// produto com desconto. A função deve receber o valor
// original do produto e o percentual de desconto como
// parâmetros, e retornar o valor com desconto aplicado.
function desconto (valor, porcen) {
    let porcentagem = porcen / 100
    return valor - valor * porcentagem          
}