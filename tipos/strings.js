"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = 'Heroe: Volcan Negro';
    console.log(batman.toUpperCase());
    //interpolacion 
    console.log(`I'm ${batman}`);
    //con el operador ? si no existe hace la segunda opcion que le damos || 
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
})();
