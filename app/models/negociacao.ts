export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime()); // criando uma cópia da data original para evitar mudanças não autorizadas no dado usando métodos do tipo `Data`, exemplo setDate
        return data;
    }

    public criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor);
    }
}