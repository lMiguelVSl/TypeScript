"use strict";
(() => {
    const fullName = (firstName, LastName, isUpper = false) => {
        if (isUpper)
            return `${firstName} ${LastName || '-'}`.toUpperCase();
        else
            return `${firstName} ${LastName || '-'}`;
    };
    const name = fullName('Miguel');
    console.log({ name });
})();
