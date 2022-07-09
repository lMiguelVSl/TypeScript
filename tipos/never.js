"use strict";
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    console.log('Antes del never');
    abc('Error  500');
    console.log('Despues del never'); //nunca llega
})();
