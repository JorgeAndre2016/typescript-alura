export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        let retOrig = metodoOriginal.apply(this, args);
        if(typeof retOrig === 'string') {
            // console.log(`@escape em ação na class ${this.constructor.name} 
            //     para o método ${propertyKey}`);
            
            retOrig = retOrig
                .replace(/<script>[\s\S]*?<\/script>/, '');
        };
        return retOrig;
    };

    return descriptor;
}