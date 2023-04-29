"use strict";
(() => {
    const getName = (firstName, ...restParameters) => {
        console.log(`${firstName} ${restParameters.join(' ')}`);
    };
    getName('Miguel', 'Angel', 'Vargas');
})();
