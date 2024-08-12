// Nessa primeira linha estamos importando o express, e na segunda estamops colocando todas as funções dele em uma variável
const express = require('express'); 
const app = express();

// O get lê
app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
})