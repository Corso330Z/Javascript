class Imovel {
    constructor(quartos) {
        this.quartos = quartos
    }
    constructor(tipo) {
        this.tipo = tipo
    }
    constructor(endereco) {
        this.endereco = endereco
    }
    exibirInformacoes() {
        return`Quartos: ${this.quartos} \nTipo: ${this.casa} \nEndereço: ${this.endereco}`
    }  
}

