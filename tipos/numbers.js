"use strict";
(() => {
    let avengers = 10;
    const villains = 20;
    if (avengers < villains) {
        console.log('Estamos en problenas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = 123;
    avengers = Number('6');
    console.log({ avengers });
})();
