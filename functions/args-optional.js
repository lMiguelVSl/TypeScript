"use strict";
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName} ${LastName || '-'}`;
    };
    const name = fullName('Miguel');
    console.log({ name });
})();
