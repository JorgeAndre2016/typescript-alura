export class NegociacoesView {
    template(): string {
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
            
            </tbody>
        </table>
        `;
    }
}