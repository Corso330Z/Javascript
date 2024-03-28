// 04. Crie uma função que receba um valor e uma
// porcentagem como parâmetros. A função deve retornar o
// valor acrescido da porcentagem indicada.
function porcentagem (n, porce) {
    let valor_porce = porce / 100;
    return n*valor_porce + n
}
console.log(porcentagem(100, 10))