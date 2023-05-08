import { domInjetor } from "../decorators/dom-injetor.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    @domInjetor('#data')
    private inputData: HTMLInputElement;
    @domInjetor('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjetor('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    constructor() {
        // this.inputData = document.querySelector('#data') as HTMLInputElement;
        // this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade'); // outra maneira de declaração 
        // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.atualizar(this.negociacoes);
    }

    @inspecionar
    @logarTempoDeExecucao()
    public adicionar(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.atualizar('Negociações só são aceitas em dias úteis');
            return;
        }
        this.negociacoes.adicionar(negociacao);
        // this.negociacoes.listar().pop(); // com o ajuste no retorno do metódo listar, não é possível mais apagar objetos do array original
        imprimir(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    public importarDados(): void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacaoDeHoje => {
                return negociacaoDeHoje.filter(negociacaoDeHoje => {
                    return !this.negociacoes
                        .listar()
                        .some(negociacao => negociacao
                            .ehIgual(negociacaoDeHoje)
                        );
                });
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adicionar(negociacao);
                };
                this.negociacoesView.atualizar(this.negociacoes);
            });
    }

    private ehDiaUtil(date: Date): boolean {
        return date.getDay() > DiasDaSemana.DOMINGO 
            && date.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.atualizar(this.negociacoes);
        this.mensagemView.atualizar('Negociação adicionada com sucesso.');
    }
}