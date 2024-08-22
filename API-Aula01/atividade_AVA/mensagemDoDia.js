// Recebendo o arquivo dados
let dados = require('./dados');

// Definir a mensagem de acordo com o dia
function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
};

// Exportar a função retornar a mensagem
exports.retornarMensagemDoDia = retornarMensagemDoDia;