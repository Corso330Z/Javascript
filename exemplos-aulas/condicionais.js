import rl from "readline-sync";
// Para vir para essa pasta, cd, e para voltar cd..

// If e else
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
} //existe else if = elif

if (idade >= 18) console.log("Maior de idade");
(idade >= 18) && console.log("Maior de idade");


idade >= 18 ? "Maior de idade" : "Menor de idade"; //? = if e : = else, chamado de ternário
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"; //Vai receber alguma das alternativas.

// Switch case

let ddd = rl.questionInt("Digite o seu DDD: ")

switch (ddd) {
    case 69:
        console.log("Rondônia");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 11:
        console.log("São Paulo");
        break;
    case 65:
        console.log("Mato Grosso");
        break;
    default:
        console.log("DDD não encontrado")
        break;
}
