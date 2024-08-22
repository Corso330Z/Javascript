// Nessa primeira linha estamos importando o express, e na segunda estamos colocando todas as funções dele em uma variável
// Cria uma instância da aplicação
const express = require('express'); 
const app = express();

// Define uma rota GET para a raiz do site ('/')
app.get('/',(req, res) => {
    let mensagem = ({mensagem:'Hello World!'});
    // Enviar a resposta 'Hello World!' ao cliente
    res.json(mensagem);
});


// Inicia o servidor na porta 8080
app.listen(8080, () => {
    // Cria um objeto Date para onter a data e horas atuais
    let data = new Date();
    // Imprime no console a mensagem de que o servidor foi iniciado, junto com a data e hora atual
    console.log("Servidor node iniciado em: " + data);
})