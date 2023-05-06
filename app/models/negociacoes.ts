import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        // return [...this.negociacoes]; // criando um novo objeto na memória com 'spread operator'
        return this.negociacoes;
    }
}