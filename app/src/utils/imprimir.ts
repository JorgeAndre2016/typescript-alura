import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
    objetos.forEach((element) => {
        console.log(element.paraTexto());
    });
}