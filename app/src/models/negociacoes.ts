import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel {

    // private negociacoes: Array<Negociacao> = []; // outra maneira de declaração usando o generics
    private negociacoes: Negociacao[] = [];

    public adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    
    // listar(): ReadonlyArray<Negociacao> { // outra maneira de declaração usando o generics
    public listar(): readonly Negociacao[] {
        // return [...this.negociacoes]; // criando um novo objeto na memória com 'spread operator'
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}