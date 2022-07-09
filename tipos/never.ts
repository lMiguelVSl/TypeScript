
(()=>{

    const abc = ( message: string ) : never => { //no termina exitosamente
        
        throw new Error(message);
        
    }

    console.log('Antes del never');

    abc('Error  500');

    console.log('Despues del never'); //nunca llega

}) ()