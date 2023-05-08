import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objetos: Negociacao[]) {
    objetos.forEach((element) => {
        console.log(element.paraTexto());
    });
}