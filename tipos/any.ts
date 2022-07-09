
(()=>{

    let avenger : any = 123;
    let exist;
    let power;

    avenger = 'Dr Strange';
    console.log( (avenger as string).charAt(0) ); //tipos de casteo para especificar el tipo

    avenger = 150.232564;
    console.log( (<number>avenger).toFixed(2) ); //otro tipo de casteo 

    //----SIEMPRE USAR TIPADO PARA NO USAR EL CASTEO 

}) ()