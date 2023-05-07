export function logarTempoDeExecucao() {
    return function(
        targer: any,
        propertyKey: string, // nome do método que recebeu o decorator
        descriptor: PropertyDescriptor // referência para o método de execução que foi decorado
    ) {
        const metodoOriginal = descriptor.value; // cópia do método original

        descriptor.value = function(...args: any[]) { // passando os parâmetros da função para função
            const timerStart = performance.now();
            const retOrig = metodoOriginal.apply(this, args); // execução método original usando o apply
            // apply permite passar um contexto de execução e uma lista de argumentos
            const timerEnd = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(timerEnd - timerStart)/1000} segundos`);
            retOrig;
        };

        return descriptor;
    }
}