// desta maneira não é possível passar parâmetros para o decorator
export function inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retOrig = metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retOrig)}`);           
        return retOrig;
    };
    return descriptor;
}