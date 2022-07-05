
(() => {

    const batman        : string = 'Batman';
    const linternaVerde : string = 'Linterna Verde';
    const volcanNegro   : string = 'Heroe: Volcan Negro';

    console.log( batman.toUpperCase() );
    
    //interpolacion 
    console.log(`I'm ${batman}`); 

    //con el operador ? si no existe hace la segunda opcion que le damos || 
    console.log(batman[10]?.toUpperCase() || 'No existe'); 

}) ()