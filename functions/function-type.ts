(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hi ${name}`;
    const saveTheWorld = () => `The world is saved`;

    let myFunction: (y: number, z: number) => number;

    //myFunction = 10;
    //console.log(myFunction);

    //myFunction = saveTheWorld #Error does not match the firm

    myFunction = addNumbers;
    console.log(myFunction(1, 2));
})()