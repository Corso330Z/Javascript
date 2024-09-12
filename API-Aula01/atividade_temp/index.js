const express = require('express');
const app = express();

let conversorTEMP = require('./conversorTEMP');

app.get('/', (req, res) => {
    let valor = req.query.valor
    let tipo = req.query.tipo

    let graus = conversorTEMP.CalculoTemperatura(valor, tipo)
    res.json({graus: graus, });

});

app.listen(8080, () => {
    let data = new Date()
    console.log('Servidor node iniciado em: ' + data);
});