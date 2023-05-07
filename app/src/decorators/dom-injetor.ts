export function domInjetor(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        
        // escopo de função sendo usado para evitar que seja feito novamente a busca
        // do elemento no DOM
        let elemento: HTMLHtmlElement | null = null;
        const getter = function() {
            // validação para evitar a busca desnecessária 
            if(!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor
                    ${seletor} para injetar em ${propertyKey}`);
            }
            
            return elemento;
        }

        // função que ajuda a definir uma propriedade dentro de um objeto a partir de um prototype
        Object.defineProperty(
            target, // passando o prototype
            propertyKey, // nome da propriedade
            { get: getter } // mudando get definido originalmente pela função getter
        );
    }
}