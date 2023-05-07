export function logarTempoDeExecucao() {
    return function(
        targer: any,
        propertyKey: string, // nome do método que recebeu o decorator
        descriptor: PropertyDescriptor // referência para o método de execução que foi decorado
    ) {
        return descriptor;
    }
}