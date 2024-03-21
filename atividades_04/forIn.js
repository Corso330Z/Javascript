// 1. Escreva um programa que itere sobre as propriedades
// de um objeto e imprima suas chaves e valores.

let objeto = {
    nome: "Lápis Faber-Castell",
    categoria: "Material Escolar",
    cor: "Vermelho"
};

for (let dados in objeto) {
    console.log(`${[dados]} : ${objeto[dados]}`)
}