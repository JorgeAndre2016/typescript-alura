import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thread>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thread>
            <tbody>
                ${model.listar().map(negociacao => {
                    return `
                    <tr>
                        <td>${this.formatarData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    <script>ddd</script>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}