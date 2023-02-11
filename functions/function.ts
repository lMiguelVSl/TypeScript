(() => {
    const hero: string = 'Flash';
    const returnName = (): string => hero;
    const activateBatSignal = (): string => 'Bat Signal Activated';
    console.log(typeof activateBatSignal);
})()