(() => {
    const getName = (firstName: string, ...restParameters: string[]) => {
        console.log(`${firstName} ${restParameters.join(' ')}`);
    }

    getName('Miguel', 'Angel', 'Vargas');
})()