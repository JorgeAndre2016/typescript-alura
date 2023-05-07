export function domInjetor(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM com o seletor
                ${seletor} para injetar em ${propertyKey}`);
            
            return elemento;
        }

        Object.defineProperty(
            target, // passando o prototype
            propertyKey, // nome da propriedade
            { get: getter } // mudando get definido originalmente pela função getter
        );
    }
}