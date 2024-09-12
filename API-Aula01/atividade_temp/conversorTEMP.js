function CalculoTemperatura(valor, tipo) {
    
    let status
    let resultado;

    if (tipo === 'celsius') {
        resultado = (temperatura * 1.8) + 32;
        status = { valor: temperatura, tipo: 'Celsius', convertido: resultado, tipoConvertido: 'Fahrenheit' };
      } else if (tipo === 'fahrenheit') {
        resultado = (temperatura - 32) * 5/9;
        status = { valor: temperatura, tipo: 'Fahrenheit', convertido: resultado, tipoConvertido: 'Celsius' };
    } else {
        status = { error: 'Tipo de conversão inválido. Use "celsius" ou "fahrenheit".' };
      }

      return resultado
};

function retornarStatusTEMP(resultado) {
    
}

exports.CalculoTemperatura = CalculoTemperatura

// if (!valor || !tipo) {
//     return res.status(400).json({ error: 'Por favor, informe o valor da temperatura e o tipo (celsius ou fahrenheit).' });
//   }

//   const temperatura = parseFloat(valor);

// if (isNaN(temperatura)) {
//     return res.status(400).json({ error: 'Valor da temperatura inválido.' });
//   }
