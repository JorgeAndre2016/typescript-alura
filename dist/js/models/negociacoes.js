export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        // return [...this.negociacoes]; // criando um novo objeto na memória com 'spread operator'
        return this.negociacoes;
    }
}
