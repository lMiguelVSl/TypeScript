"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hi ${name}`;
    const saveTheWorld = () => `The world is saved`;
    let myFunction;
    //myFunction = 10;
    //console.log(myFunction);
    //myFunction = saveTheWorld #Error does not match the firm
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
})();
