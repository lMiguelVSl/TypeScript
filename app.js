"use strict";
const hero = {
    name: 'Miguel',
};
let a = 10; //type number 
const b = 10;
const sayHello = (msg) => {
    console.log(msg);
};
sayHello('Miguelinho hola');
//funcion anonima autoinvocada syntax
(() => {
    const a = 5;
    //console.log(a);
})();
//-------
